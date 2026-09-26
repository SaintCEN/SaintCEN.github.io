/* Static Hexo pages, persistent document navigation, original Curve reveal.
 * Curve reference: Olivier Larose, nextjs-framer-page-transition/Layout/Curve.
 */
(function () {
    'use strict';
    if (!window.fetch || !window.MinosPage || !window.DOMParser) return;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var pages = new Map(), scripts = new Map(), scriptText = new Map(), once = new Set(), navAnimations = new WeakMap();
    var revealed = Promise.resolve(), finishReveal;
    var current = new URL(location.href), request = 0, frame = 0, layer, safety, scrollTimer;
    var svg, path, label, width, height, initialized = false, restoring = false;
    var repeatScripts = /\/js\/(home-hero|post-toc|album|script|insight)\.js$/;
    var bundleReady, preloadReady, jsonData = new Map(), images = new Map();
    function key(url) { return url.pathname.replace(/\/(?:index\.html)?$/, '') + url.search; }
    function localPage(url) {
        return url.origin === location.origin && !(/\.[^/]+$/.test(url.pathname) && !/\.html?$/.test(url.pathname));
    }
    function clear() {
        cancelAnimationFrame(frame); clearTimeout(safety); frame = 0;
        if (layer) layer.remove();
        layer = null;
        document.documentElement.classList.remove('curve-home', 'curve-entering');
        if (finishReveal) { finishReveal(); finishReveal = null; }
    }
    function measure() { width = innerWidth; height = innerHeight; }
    function shape(amount) {
        return 'M0 300 Q' + width / 2 + ' 0 ' + width + ' 300 L' + width + ' ' + (height + 300 * amount)
            + ' Q' + width / 2 + ' ' + (height + 600 * amount) + ' 0 ' + (height + 300 * amount) + ' L0 0';
    }
    function cubic(t, a, b) { return 3 * (1 - t) * (1 - t) * t * a + 3 * (1 - t) * t * t * b + t * t * t; }
    function ease(value) {
        if (value <= 0) return 0;
        if (value >= 1) return 1;
        var low = 0, high = 1, t;
        for (var i = 0; i < 18; i++) { t = (low + high) / 2; if (cubic(t, 0.76, 0.24) < value) low = t; else high = t; }
        return cubic(t, 0, 1);
    }
    function paint(elapsed) {
        var curve = ease((elapsed - 350) / 750);
        path.setAttribute('d', shape(1 - curve));
        svg.style.top = (-300 + (300 - height) * curve) + 'px';
        label.style.top = (height * 0.4 + (-100 - height * 0.4) * curve) + 'px';
        label.style.opacity = 1 - curve;
    }
    function play(title, fullScreen) {
        clear();
        if (reduced.matches) return;
        revealed = new Promise(function (resolve) { finishReveal = resolve; });
        measure();
        document.documentElement.classList.toggle('curve-home', fullScreen);
        layer = document.createElement('div'); layer.className = 'page-curve is-entering'; layer.setAttribute('aria-hidden', 'true');
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('focusable', 'false');
        path = document.createElementNS(svg.namespaceURI, 'path'); svg.appendChild(path);
        label = document.createElement('p'); label.className = 'route'; label.textContent = title;
        layer.append(svg, label); document.body.appendChild(layer);
        paint(0);
        var start = performance.now();
        function tick(now) {
            if (!layer) return;
            paint(now - start);
            if (now - start < 1100) frame = requestAnimationFrame(tick); else clear();
        }
        frame = requestAnimationFrame(tick);
        safety = setTimeout(clear, 2500);
    }
    function warmImages(doc, base) {
        return Promise.all(Array.from(doc.querySelectorAll('#site-page img[src]')).map(function (source) {
            var src = new URL(source.getAttribute('src'), base).href;
            var srcset = source.getAttribute('srcset') || '';
            var sizes = source.getAttribute('sizes') || '';
            var id = src + srcset + sizes;
            if (!images.has(id)) images.set(id, new Promise(function (resolve) {
                var image = new Image();
                var timeout = setTimeout(resolve, 15000);
                image.onload = image.onerror = function () { clearTimeout(timeout); resolve(); };
                image.sizes = sizes;
                image.srcset = srcset;
                image.src = src;
            }));
            return images.get(id);
        }));
    }
    async function loadBundle() {
        var meta = document.querySelector('meta[name="site-bundle"]');
        if (!meta) return [];
        var controller = new AbortController();
        var timeout = setTimeout(function () { controller.abort(); }, 20000);
        try {
            var response = await fetch(meta.content, { cache: 'no-cache', signal: controller.signal });
            if (!response.ok) throw new Error('Site bundle unavailable');
            var bundle = await response.json();
            if (!bundle.pages || !bundle.scripts || !bundle.data) throw new Error('Invalid site bundle');
            Object.keys(bundle.scripts).forEach(function (src) {
                scriptText.set(new URL(src, location.href).href, Promise.resolve(bundle.scripts[src]));
            });
            Object.keys(bundle.data).forEach(function (src) {
                jsonData.set(new URL(src, location.href).href, Promise.resolve(bundle.data[src]));
            });
            return Object.keys(bundle.pages).map(function (path) {
                var url = new URL(path, location.href);
                var doc = new DOMParser().parseFromString(bundle.pages[path], 'text/html');
                var result = { doc: doc, url: url.href };
                pages.set(key(url), Promise.resolve(result));
                return result;
            });
        } catch (error) {
            console.warn('Site preload unavailable; individual pages remain accessible.', error);
            return [];
        } finally { clearTimeout(timeout); }
    }
    async function preloadSite(entries) {
        var media = entries.map(function (entry) { return warmImages(entry.doc, entry.url); });
        // Load shared libraries once in their template order; page initializers
        // run only when their page is mounted. MathJax must not scan this page.
        for (var entry of entries) {
            for (var script of entry.doc.querySelectorAll('#site-page script[src]')) {
                var url = new URL(script.getAttribute('src'), entry.url);
                if (repeatScripts.test(url.pathname)) continue;
                if (/\/MathJax\.js$/.test(url.pathname)) window.MathJax = window.MathJax || { skipStartupTypeset: true };
                try { await loadScript(script); } catch (error) { console.warn('Optional library preload failed.', error); }
            }
        }
        await Promise.all(media);
        document.documentElement.dataset.sitePreloaded = 'true';
        document.dispatchEvent(new Event('minos:site-preloaded'));
    }
    async function getJSON(value) {
        await bundleReady;
        var url = new URL(value, location.href).href;
        if (!jsonData.has(url)) jsonData.set(url, fetch(url).then(function (response) {
            if (!response.ok) throw new Error('Data unavailable');
            return response.json();
        }).catch(function (error) { jsonData.delete(url); throw error; }));
        return jsonData.get(url);
    }
    async function fetchPage(url) {
        await bundleReady;
        var id = key(url);
        if (pages.has(id)) return pages.get(id);
        // Query strings do not change generated Hexo content.
        var plain = new URL(url.href); plain.search = '';
        if (pages.has(key(plain))) return pages.get(key(plain)).then(function (page) { return { doc: page.doc, url: url.href }; });
        var controller = new AbortController();
        var timeout = setTimeout(function () { controller.abort(); }, 8000);
        var promise = fetch(url.pathname + url.search, { signal: controller.signal, credentials: 'same-origin' })
            .then(function (response) {
                if (!response.ok || !/text\/html/i.test(response.headers.get('content-type') || '') || new URL(response.url).origin !== location.origin) throw new Error('Page unavailable');
                return response.text().then(function (html) {
                    var doc = new DOMParser().parseFromString(html, 'text/html');
                    if (!doc.querySelector('#site-page') || !doc.querySelector('#site-navigation-shell')) throw new Error('Page needs document navigation');
                    warmImages(doc, response.url);
                    return { doc: doc, url: response.url };
                });
            }).catch(function (error) { pages.delete(id); throw error; }).finally(function () { clearTimeout(timeout); });
        pages.set(id, promise);
        return promise;
    }
    function loadScript(source, scope) {
        var src = source.getAttribute('src');
        if (!src) {
            var onceId = source.dataset.minosOnce;
            if (onceId && once.has(onceId)) return Promise.resolve();
            if (onceId) once.add(onceId);
            var inline = document.createElement('script');
            if (source.type) inline.type = source.type;
            inline.textContent = source.textContent;
            document.head.appendChild(inline); inline.remove();
            return Promise.resolve();
        }
        var url = new URL(src, location.href).href;
        var repeat = repeatScripts.test(new URL(url).pathname);
        if (repeat) {
            if (!scriptText.has(url)) scriptText.set(url, fetch(url).then(function (response) {
                if (!response.ok) throw new Error('Cannot load ' + url);
                return response.text();
            }).catch(function (error) { scriptText.delete(url); throw error; }));
            return scriptText.get(url).then(function (text) {
                if (!scope.active) return;
                var local = document.createElement('script');
                local.textContent = text + '\n//# sourceURL=' + url;
                document.head.appendChild(local); local.remove();
            });
        }
        if (!repeat && scripts.has(url)) return scripts.get(url);
        var promise = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            var timeout = setTimeout(function () { script.onerror(); }, 15000);
            script.src = url; script.async = false;
            script.onload = function () { clearTimeout(timeout); script.remove(); resolve(); };
            script.onerror = function () { clearTimeout(timeout); script.remove(); scripts.delete(url); reject(new Error('Cannot load ' + url)); };
            document.head.appendChild(script);
        });
        if (!repeat) scripts.set(url, promise);
        return promise;
    }
    async function activate(list, scope, element) {
        try {
            for (var script of list) {
                if (!scope.active) return;
                await loadScript(script, scope);
            }
            if (!scope.active) return;
            element.dataset.pageReady = 'true';
            document.dispatchEvent(new Event('minos:content-ready'));
        } catch (error) { console.warn('Page content is available; an optional script failed.', error); }
    }
    function syncHead(doc) {
        document.title = doc.title;
        var selector = 'meta[name="description"],meta[name="page-transition-title"],meta[name="page-kind"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"]';
        document.head.querySelectorAll(selector).forEach(function (node) { node.remove(); });
        doc.head.querySelectorAll(selector).forEach(function (node) { document.head.appendChild(document.importNode(node, true)); });
    }
    function syncNavbar(doc) {
        var shell = document.getElementById('site-navigation-shell');
        var incoming = document.importNode(doc.getElementById('site-navigation-shell'), true);
        incoming.querySelectorAll('noscript').forEach(function (node) { node.remove(); });
        if (shell.querySelector('.navbar-main') && incoming.querySelector('.navbar-main')) {
            shell.querySelectorAll('.gooey-link').forEach(function (link) {
                var match = Array.from(incoming.querySelectorAll('.gooey-link')).find(function (other) { return other.getAttribute('href') === link.getAttribute('href'); });
                var selected = match && match.hasAttribute('aria-current');
                link.parentElement.classList.toggle('active', !!selected);
                if (selected) link.setAttribute('aria-current', match.getAttribute('aria-current')); else link.removeAttribute('aria-current');
            });
        } else shell.replaceChildren.apply(shell, Array.from(incoming.childNodes).map(function (node) { return document.importNode(node, true); }));
        document.dispatchEvent(new Event('minos:navbar-ready'));
    }
    function savePosition() {
        if (restoring || key(new URL(location.href)) !== key(current)) return;
        history.replaceState(Object.assign({}, history.state, { minos: true, scroll: [scrollX, scrollY] }), '', location.href);
    }
    function position(url, saved) {
        if (saved) { scrollTo({ left: saved[0], top: saved[1], behavior: 'instant' }); return; }
        var anchor;
        try { anchor = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch (error) {}
        if (anchor) anchor.scrollIntoView({ behavior: 'instant' }); else scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    async function navigate(value, options) {
        options = options || {};
        var url = new URL(value, location.href);
        if (!initialized || !localPage(url)) { location.assign(url.href); return; }
        if (key(url) === key(current)) {
            request++;
            document.getElementById('site-page').removeAttribute('aria-busy');
            if (options.pop) position(url, options.scroll);
            else if (url.hash) location.hash = url.hash;
            current = url; return;
        }
        var ticket = ++request;
        var fromHome = !document.documentElement.classList.contains('has-navbar-fixed-top');
        var fromArticle = !!document.querySelector('meta[name="page-kind"][content="article"]');
        var oldPage = document.getElementById('site-page');
        oldPage.setAttribute('aria-busy', 'true');
        try {
            var results = await Promise.all([fetchPage(url), options.animation || Promise.resolve()]);
            // A later click can settle an earlier Gooey animation mid-bubble.
            await new Promise(function (resolve) { setTimeout(resolve, 0); });
            if (ticket !== request) return;
            var result = results[0], doc = result.doc;
            var target = new URL(result.url); target.hash = url.hash;
            var incoming = document.importNode(doc.getElementById('site-page'), true);
            incoming.dataset.route = target.pathname;
            incoming.querySelectorAll('noscript').forEach(function (node) { node.remove(); });
            var list = Array.from(incoming.querySelectorAll('script'));
            list.forEach(function (script) { script.remove(); });
            if (!options.pop) {
                savePosition();
                history.pushState({ minos: true, scroll: [0, 0] }, '', target.href);
            }
            current = new URL(location.href);
            restoring = true;
            window.MinosPage.scope.dispose();
            window.MinosPage.scope = window.MinosPage.createScope();
            syncHead(doc);
            var hasNavbar = doc.documentElement.classList.contains('has-navbar-fixed-top');
            document.documentElement.classList.toggle('has-navbar-fixed-top', hasNavbar);
            var title = doc.querySelector('meta[name="page-transition-title"]');
            var toArticle = !!doc.querySelector('meta[name="page-kind"][content="article"]');
            if (fromArticle || toArticle) clear();
            else play(title ? title.content : doc.title, fromHome || !hasNavbar);
            oldPage.replaceWith(incoming);
            syncNavbar(doc);
            position(url, options.scroll);
            var heading = incoming.querySelector('h1');
            if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
            restoring = false;
            savePosition();
            activate(list, window.MinosPage.scope, incoming);
            document.dispatchEvent(new CustomEvent('minos:route-change', { detail: { url: current.href } }));
        } catch (error) {
            if (ticket !== request) return;
            clear(); oldPage.removeAttribute('aria-busy');
            location.assign(url.href);
        }
    }
    function eligible(event) {
        var link = event.target.closest && event.target.closest('a[href]');
        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self') || link.closest('[data-no-pjax]')) return null;
        var url = new URL(link.href);
        return localPage(url) && key(url) !== key(current) ? { link: link, url: url } : null;
    }
    document.addEventListener('minos:nav-animation', function (event) { navAnimations.set(event.detail.link, event.detail.finished); });
    document.addEventListener('click', function (event) {
        if (!initialized || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        var target = eligible(event);
        if (!target) {
            var same = event.target.closest && event.target.closest('a[href]');
            if (same && !same.hasAttribute('download') && (!same.target || same.target === '_self')) {
                var sameUrl = new URL(same.href);
                if (localPage(sameUrl) && key(sameUrl) === key(current)) {
                    request++; document.getElementById('site-page').removeAttribute('aria-busy');
                    if (!sameUrl.hash) event.preventDefault();
                }
            }
            return;
        }
        event.preventDefault();
        navigate(target.url.href, { animation: reduced.matches ? null : navAnimations.get(target.link) });
    });
    window.addEventListener('popstate', function (event) { navigate(location.href, { pop: true, scroll: event.state && event.state.scroll }); });
    window.addEventListener('hashchange', function () {
        var url = new URL(location.href);
        if (key(url) === key(current)) { current = url; savePosition(); }
    });
    window.addEventListener('scroll', function () { clearTimeout(scrollTimer); scrollTimer = setTimeout(savePosition, 100); }, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('pagehide', clear);
    reduced.addEventListener('change', function () { if (reduced.matches) clear(); });
    // Start the one site download as soon as the head script runs.
    bundleReady = loadBundle();
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('script[src]').forEach(function (script) { scripts.set(script.src, Promise.resolve()); });
        document.querySelectorAll('script[data-minos-once]').forEach(function (script) { once.add(script.dataset.minosOnce); });
        history.scrollRestoration = 'manual'; savePosition(); initialized = true;
        document.getElementById('site-page').dataset.route = current.pathname;
        try { sessionStorage.removeItem('minos-curve-route'); sessionStorage.removeItem('minos-curve-previous'); } catch (error) {}
        preloadReady = bundleReady.then(preloadSite);
    }, { once: true });
    window.MinosRouter = {
        navigate: navigate,
        getJSON: getJSON,
        whenPreloaded: function () { return preloadReady; },
        whenRevealed: function () { return revealed; }
    };
})();
