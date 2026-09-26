/* Native ink adaptation of React Bits Gooey Nav.
 * Reference: https://reactbits.dev/components/gooey-nav
 */
(function () {
    'use strict';
    var nav = document.querySelector('.gooey-nav');
    if (!nav) return;
    var links = Array.from(nav.querySelectorAll('.gooey-link'));
    var effect = nav.querySelector('.gooey-effect');
    var current = nav.querySelector('.gooey-link.is-active');
    var target = null;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var bar = document.querySelector('.navbar-main');
    var burger = bar.querySelector('.navbar-burger');
    var tools = bar.querySelector('.navbar-end');
    var category = nav.querySelector('.navbar-categories');
    var categoryButton = category && category.querySelector('button');
    var cleanup;

    function clearDrops() {
        clearTimeout(cleanup);
        effect.querySelectorAll('.gooey-dot').forEach(function (dot) { dot.remove(); });
    }

    function place(link, burst) {
        clearDrops();
        links.forEach(function (item) { item.classList.toggle('is-gooey-target', item === link); });
        target = link;
        if (!link || !link.getClientRects().length) {
            effect.style.opacity = '0';
            return;
        }
        var bounds = nav.getBoundingClientRect();
        var rect = link.getBoundingClientRect();
        effect.style.width = rect.width + 'px';
        effect.style.height = rect.height + 'px';
        effect.style.transform = 'translate(' + (rect.left - bounds.left) + 'px,' + (rect.top - bounds.top) + 'px)';
        effect.style.opacity = '1';
        if (!burst || reduced.matches) return;
        for (var i = 0; i < 8; i++) {
            var angle = (i + Math.sin(i * 2) * 0.2) * Math.PI / 4;
            var dot = document.createElement('span');
            dot.className = 'gooey-dot';
            dot.style.setProperty('--drop-size', (7 + i * 3 % 5) + 'px');
            dot.style.setProperty('--drop-x', (Math.cos(angle) * (rect.width / 2 + 8 + i % 4)) + 'px');
            dot.style.setProperty('--drop-y', (Math.sin(angle) * (rect.height / 2 + 5 + i % 6)) + 'px');
            dot.style.setProperty('--drop-delay', (i % 3 * 25) + 'ms');
            effect.appendChild(dot);
        }
        cleanup = setTimeout(clearDrops, 850);
    }

    function restore() {
        var focused = document.activeElement.closest('.gooey-link');
        place(focused && nav.contains(focused) ? focused : current, false);
    }

    function closeCategories() {
        if (!category) return;
        category.classList.remove('is-open');
        categoryButton.setAttribute('aria-expanded', 'false');
    }

    function closeMenu() {
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-active');
        tools.classList.remove('is-active');
        closeCategories();
    }

    links.forEach(function (link) {
        link.addEventListener('pointerenter', function (event) {
            if (event.pointerType !== 'touch') place(link, target !== link);
        });
        link.addEventListener('focus', function () { place(link, true); });
        link.addEventListener('click', function () { place(link, true); });
    });
    nav.addEventListener('pointerleave', restore);
    nav.addEventListener('focusout', function () { requestAnimationFrame(restore); });
    burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') !== 'true';
        burger.setAttribute('aria-expanded', String(open));
        burger.classList.toggle('is-active', open);
        nav.classList.toggle('is-active', open);
        tools.classList.toggle('is-active', open);
        if (!open) closeCategories();
        place(current, false);
    });
    if (category) {
        categoryButton.addEventListener('click', function () {
            var open = categoryButton.getAttribute('aria-expanded') !== 'true';
            categoryButton.setAttribute('aria-expanded', String(open));
            category.classList.toggle('is-open', open);
        });
    }
    document.addEventListener('click', function (event) {
        if (!bar.contains(event.target)) { closeMenu(); restore(); }
        else if (category && !category.contains(event.target)) closeCategories();
    });
    bar.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        if (category && category.classList.contains('is-open')) {
            closeCategories();
            categoryButton.focus();
        } else if (burger.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            burger.focus();
        }
    });
    function resize() { place(target || current, false); }
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(resize).observe(nav);
    window.addEventListener('resize', resize);
    window.addEventListener('pageshow', function () { closeMenu(); place(current, false); });
    reduced.addEventListener('change', function () { place(current, false); });
    if (document.fonts) document.fonts.ready.then(resize);
    nav.classList.add('gooey-ready');
    place(current, false);
})();
