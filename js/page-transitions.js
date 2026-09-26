/* Hexo document navigation with Olivier Larose's Curve geometry and timing.
 * Reference: https://github.com/olivierlarose/nextjs-framer-page-transition/tree/main/src/components/Layout/Curve
 * Play once on the destination document: 750ms after 350ms.
 * Use a real SVG quadratic path, matching anim.js; no rounded-box substitute.
 */
(function () {
    'use strict';
    var key = 'minos-curve-route';
    var previousKey = 'minos-curve-previous';
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var navigation = performance.getEntriesByType('navigation')[0];
    var pending = false, leaving = null, frame = 0, layer = null;
    var fromHome = false, committed = false, request = 0;
    var isHome = !document.documentElement.classList.contains('has-navbar-fixed-top');
    var navAnimations = new WeakMap();
    var svg, path, label, width, height;
    var safety;
    function route(url) { return url.pathname.replace(/\/$/, '') + url.search; }
    function previousWasHome() {
        try {
            var previous = JSON.parse(sessionStorage.getItem(previousKey) || 'null');
            return !!previous && previous.home && Date.now() - previous.time < 60000;
        } catch (error) { return false; }
    }
    try {
        var saved = JSON.parse(sessionStorage.getItem(key) || 'null');
        sessionStorage.removeItem(key);
        pending = !!saved && Date.now() - saved.time < 60000 && saved.route === route(location)
            && (!navigation || navigation.type !== 'reload');
        fromHome = pending && !!saved.fromHome;
    } catch (error) { /* Navigation remains available without storage. */ }
    if (navigation && navigation.type === 'back_forward') { pending = true; fromHome = previousWasHome(); }
    function markHomeTransition() {
        document.documentElement.classList.toggle('curve-home', isHome || fromHome);
    }
    if (pending && !reduced.matches) {
        document.documentElement.classList.add('curve-entering');
        markHomeTransition();
    }

    function clear() {
        cancelAnimationFrame(frame);
        clearTimeout(safety);
        frame = 0;
        if (layer) layer.remove();
        layer = null;
        document.documentElement.classList.remove('curve-entering', 'curve-home');
    }
    function measure() { width = innerWidth; height = innerHeight; }
    function shape(amount) {
        return 'M0 300 Q' + width / 2 + ' 0 ' + width + ' 300 L' + width + ' ' + (height + 300 * amount)
            + ' Q' + width / 2 + ' ' + (height + 600 * amount) + ' 0 ' + (height + 300 * amount) + ' L0 0';
    }
    function create() {
        clear();
        markHomeTransition();
        measure();
        layer = document.createElement('div');
        layer.className = 'page-curve is-entering';
        layer.setAttribute('aria-hidden', 'true');
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('focusable', 'false');
        path = document.createElementNS(svg.namespaceURI, 'path');
        svg.appendChild(path);
        label = document.createElement('p');
        label.className = 'route';
        var title = document.querySelector('meta[name="page-transition-title"]');
        label.textContent = title ? title.content : document.title;
        layer.appendChild(svg);
        layer.appendChild(label);
        (document.body || document.documentElement).appendChild(layer);
    }
    function cubic(t, p1, p2) { return 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t; }
    function ease(progress, x1, y1, x2, y2) {
        if (progress <= 0) return 0;
        if (progress >= 1) return 1;
        var low = 0, high = 1, t = progress;
        for (var i = 0; i < 18; i++) {
            t = (low + high) / 2;
            if (cubic(t, x1, x2) < progress) low = t;
            else high = t;
        }
        return cubic(t, y1, y2);
    }
    function paint(elapsed) {
        var curve = ease((elapsed - 350) / 750, 0.76, 0, 0.24, 1);
        path.setAttribute('d', shape(1 - curve));
        svg.style.top = (-300 + (300 - height) * curve) + 'px';
        label.style.top = (height * 0.4 + (-100 - height * 0.4) * curve) + 'px';
        label.style.opacity = 1 - curve;
    }
    function play() {
        create();
        paint(0);
        var start = performance.now();
        function tick(now) {
            if (!layer) return;
            var elapsed = now - start;
            paint(elapsed);
            if (elapsed < 1100) frame = requestAnimationFrame(tick);
            else { frame = 0; clear(); }
        }
        frame = requestAnimationFrame(tick);
    }
    function reveal() {
        if (!pending) return;
        pending = false;
        if (reduced.matches) { clear(); return; }
        play();
        safety = setTimeout(clear, 2500);
    }
    function navigate() {
        if (!leaving || committed) return;
        committed = true;
        var destination = leaving;
        try { sessionStorage.setItem(key, JSON.stringify({ route: route(destination), fromHome: isHome, time: Date.now() })); } catch (error) {}
        location.assign(destination.href);
        // If a navigation is cancelled or cannot finish, never trap the page.
        safety = setTimeout(function () { leaving = null; committed = false; clear(); }, 12000);
    }

    // Reveal at the first paint opportunity; CDN plugins may finish later.
    // Every trigger consumes the same pending flag, so it cannot run twice.
    window.addEventListener('pagereveal', reveal);
    document.addEventListener('DOMContentLoaded', reveal, { once: true });
    if (pending) safety = setTimeout(reveal, 2000);
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) { leaving = null; committed = false; request++; pending = true; fromHome = previousWasHome(); }
        reveal();
    });
    window.addEventListener('pagehide', function () {
        try { sessionStorage.setItem(previousKey, JSON.stringify({ home: isHome, time: Date.now() })); } catch (error) {}
        clear();
    });
    window.addEventListener('resize', measure);
    reduced.addEventListener('change', function () {
        if (!reduced.matches) return;
        clear();
        if (leaving) navigate();
    });
    document.addEventListener('minos:nav-animation', function (event) {
        navAnimations.set(event.detail.link, event.detail.finished);
    });
    document.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reduced.matches) return;
        var link = event.target.closest('a[href]');
        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
        var url;
        try { url = new URL(link.href); } catch (error) { return; }
        if (url.origin !== location.origin || route(url) === route(location)) return;
        if (/\.[^/]+$/.test(url.pathname) && !/\.html?$/.test(url.pathname)) return;
        event.preventDefault();
        if (committed) return;
        leaving = url;
        var ticket = ++request;
        var finished = navAnimations.get(link);
        if (finished) {
            finished.then(function () {
                // A new selection can resolve the old animation inside its
                // click handler. Let that click finish bubbling before commit.
                setTimeout(function () { if (ticket === request) navigate(); }, 0);
            });
        } else navigate();
    });
})();
