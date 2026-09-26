/* One shared curve reveal for home, navigation and article links.
 * Real document navigation preserves each page's scripts and browser history.
 */
(function () {
    'use strict';
    var key = 'minos-page-transition';
    var pending = false;
    var cleanup;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var navigation = performance.getEntriesByType('navigation')[0];
    function route(url) { return url.pathname.replace(/\/$/, '') + url.search; }
    try {
        var saved = JSON.parse(sessionStorage.getItem(key) || 'null');
        sessionStorage.removeItem(key);
        pending = !!saved && Date.now() - saved.time < 60000 && saved.route === route(location)
            && (!navigation || navigation.type !== 'reload');
    } catch (error) { /* Links still work when storage is unavailable. */ }
    if (navigation && navigation.type === 'back_forward') pending = true;

    function clearCurtain() {
        clearTimeout(cleanup);
        document.querySelectorAll('.page-transition-curtain').forEach(function (el) { el.remove(); });
    }

    function reveal() {
        if (!pending) return;
        pending = false;
        if (reduced.matches) return;
        clearCurtain();
        var curtain = document.createElement('div');
        curtain.className = 'page-transition-curtain';
        curtain.setAttribute('aria-hidden', 'true');
        (document.body || document.documentElement).appendChild(curtain);
        curtain.addEventListener('animationend', clearCurtain, { once: true });
        cleanup = setTimeout(clearCurtain, 1000);
    }

    // This listener must be registered in the head before the first paint.
    window.addEventListener('pagereveal', reveal);
    if (!('onpagereveal' in window)) document.addEventListener('DOMContentLoaded', reveal, { once: true });
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            pending = true;
        }
        reveal();
    });
    window.addEventListener('pagehide', clearCurtain);
    reduced.addEventListener('change', function () { if (reduced.matches) clearCurtain(); });

    document.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reduced.matches) return;
        var link = event.target.closest('a[href]');
        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
        var url;
        try { url = new URL(link.href); } catch (error) { return; }
        if (url.origin !== location.origin || route(url) === route(location)) return;
        if (/\.[^/]+$/.test(url.pathname) && !/\.html?$/.test(url.pathname)) return;
        try { sessionStorage.setItem(key, JSON.stringify({ route: route(url), time: Date.now() })); } catch (error) {}
    });
})();
