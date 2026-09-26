/* Keep real document navigation; use a short curve reveal when browser
 * snapshots are unsupported or skipped (for example on a slow connection).
 */
(function () {
    'use strict';
    var key = 'minos-page-transition';
    var pending = false;
    var handled = false;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    function route(url) { return url.pathname.replace(/\/$/, '') + url.search; }
    try {
        var saved = JSON.parse(sessionStorage.getItem(key) || 'null');
        sessionStorage.removeItem(key);
        pending = !!saved && Date.now() - saved.time < 60000 && saved.route === route(location);
    } catch (error) { /* Links still work when storage is unavailable. */ }

    function reveal() {
        if (!pending || reduced.matches) return;
        pending = false;
        var curtain = document.createElement('div');
        curtain.className = 'page-transition-fallback';
        curtain.setAttribute('aria-hidden', 'true');
        (document.body || document.documentElement).appendChild(curtain);
        curtain.addEventListener('animationend', function () { curtain.remove(); }, { once: true });
        setTimeout(function () { curtain.remove(); }, 1000);
    }

    // This listener must be registered in the head before the first paint.
    window.addEventListener('pagereveal', function (event) {
        handled = true;
        if (event.viewTransition) event.viewTransition.ready.catch(reveal);
        else reveal();
    });
    if (!('onpagereveal' in window)) document.addEventListener('DOMContentLoaded', reveal, { once: true });
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            pending = false;
            document.querySelectorAll('.page-transition-fallback').forEach(function (el) { el.remove(); });
        } else if (!handled) reveal();
    });

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
