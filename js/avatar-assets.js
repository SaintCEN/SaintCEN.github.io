/* Avatar downloads and parsed resources survive individual page visits. */
(function () {
    'use strict';
    if (window.MinosAvatarAssets) return;
    var manifest = [];
    try { manifest = JSON.parse(document.querySelector('meta[name="avatar-assets"]')?.content || '[]'); } catch (_) {}
    var urls = new Set(manifest.map(function (url) { return new URL(url, location.href).href; }));
    var downloads = new Map(), parsed = new Map();
    var storage = Promise.resolve().then(async function () {
        if (!window.caches) return null;
        var cache = await caches.open('minos-avatar-v1');
        var keys = await cache.keys();
        await Promise.all(keys.filter(function (key) { return !urls.has(key.url); }).map(function (key) { return cache.delete(key); }));
        return cache;
    }).catch(function () { return null; });

    function load(value) {
        var url = new URL(value, location.href).href;
        if (!downloads.has(url)) downloads.set(url, (async function () {
            var cache = urls.has(url) ? await storage : null;
            if (cache) {
                try {
                    var saved = await cache.match(url);
                    if (saved?.ok) return await saved.blob();
                } catch (_) {}
            }
            var response = await fetch(url, { cache: 'force-cache', credentials: 'same-origin', priority: 'low' });
            if (!response.ok) throw new Error('Avatar asset unavailable: ' + response.status);
            var blob = await response.blob();
            if (cache) {
                try { await cache.put(url, new Response(blob, { headers: response.headers })); } catch (_) {}
            }
            return blob;
        })().catch(function (error) { downloads.delete(url); throw error; }));
        return downloads.get(url);
    }

    function parse(value, parser) {
        var url = new URL(value, location.href).href;
        if (!parsed.has(url)) parsed.set(url, load(url).then(async function (blob) {
            var localUrl = URL.createObjectURL(blob);
            try {
                var resource = await parser(localUrl);
                downloads.delete(url);
                return resource;
            } finally { URL.revokeObjectURL(localUrl); }
        }).catch(function (error) { parsed.delete(url); throw error; }));
        return parsed.get(url);
    }

    function preload() {
        return Promise.allSettled(manifest.filter(function (url) { return !parsed.has(new URL(url, location.href).href); }).map(load));
    }

    window.MinosAvatarAssets = {
        load: load,
        parse: parse,
        preload: preload,
        ready: preload()
    };
})();
