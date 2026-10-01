/* Avatar downloads and parsed resources survive individual page visits. */
(function () {
    'use strict';
    if (window.MinosAvatarAssets) return;
    var manifest = [];
    try { manifest = JSON.parse(document.querySelector('meta[name="avatar-assets"]')?.content || '[]'); } catch (_) {}
    var urls = new Set(manifest.map(function (url) { return new URL(url, location.href).href; }));
    var downloads = new Map(), parsed = new Map();

    function bounded(task, milliseconds, fallback) {
        return new Promise(function (resolve) {
            var timer = setTimeout(function () { resolve(fallback); }, milliseconds);
            Promise.resolve(task).then(function (value) { clearTimeout(timer); resolve(value); }, function () { clearTimeout(timer); resolve(fallback); });
        });
    }

    var storage = Promise.resolve().then(async function () {
        if (!window.caches) return null;
        var cache = await bounded(caches.open('minos-avatar-v1'), 1000, null);
        if (!cache) return null;
        // Pruning and disk writes must never delay displaying the avatar.
        Promise.resolve().then(async function () {
            var keys = await cache.keys();
            await Promise.all(keys.filter(function (key) { return !urls.has(key.url); }).map(function (key) { return cache.delete(key); }));
        }).catch(function () {});
        return cache;
    }).catch(function () { return null; });

    async function validAsset(blob) {
        if (!blob || blob.size < 12) return false;
        var header = new DataView(await blob.slice(0, 12).arrayBuffer());
        return header.getUint32(0, true) === 0x46546c67 && header.getUint32(4, true) === 2 && header.getUint32(8, true) === blob.size;
    }

    function load(value, options) {
        options = options || {};
        var url = new URL(value, location.href).href;
        if (!downloads.has(url)) downloads.set(url, (async function () {
            var cache = urls.has(url) ? await storage : null;
            if (cache && !options.refresh) {
                try {
                    var saved = await bounded(cache.match(url), 1000, null);
                    if (saved?.ok) {
                        var cachedBlob = await bounded(saved.blob(), 3000, null);
                        if (await validAsset(cachedBlob)) return cachedBlob;
                        options.refresh = true;
                    }
                } catch (_) {}
            }
            var controller = new AbortController(), timer;
            function watchdog() {
                clearTimeout(timer);
                timer = setTimeout(function () { controller.abort(); }, 30000);
            }
            var response, blob;
            watchdog();
            try {
                response = await fetch(url, { cache: options.refresh ? 'reload' : 'force-cache', credentials: 'same-origin', signal: controller.signal });
                if (!response.ok) throw new Error('Avatar asset unavailable: ' + response.status);
                if (response.body) {
                    var reader = response.body.getReader(), chunks = [];
                    while (true) {
                        var part = await reader.read();
                        if (part.done) break;
                        chunks.push(part.value);
                        watchdog();
                    }
                    blob = new Blob(chunks, { type: response.headers.get('content-type') || 'application/octet-stream' });
                } else blob = await response.blob();
                if (!await validAsset(blob)) throw new Error('Avatar asset is incomplete or invalid');
            } finally { clearTimeout(timer); }
            if (cache) {
                // Return the bytes now; CacheStorage can persist them separately.
                Promise.resolve().then(function () { return cache.put(url, new Response(blob)); }).catch(function () {});
            }
            return blob;
        })().catch(function (error) { downloads.delete(url); throw error; }));
        return downloads.get(url);
    }

    function parse(value, parser) {
        var url = new URL(value, location.href).href;
        async function decode(blob) {
            var localUrl = URL.createObjectURL(blob);
            try {
                var resource = await parser(localUrl);
                downloads.delete(url);
                return resource;
            } finally { URL.revokeObjectURL(localUrl); }
        }
        if (!parsed.has(url)) parsed.set(url, load(url).then(decode).catch(async function () {
            // A damaged cached GLB may have a valid header. Re-download once
            // instead of repeatedly trying the same persisted bytes.
            downloads.delete(url);
            var cache = await storage;
            if (cache) Promise.resolve().then(function () { return cache.delete(url); }).catch(function () {});
            return decode(await load(url, { refresh: true }));
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
