(function () {
    'use strict';

    var toc = document.querySelector('.post-toc');
    if (!toc) return;

    var summary = toc.querySelector('summary');
    var scroller = toc.querySelector('.post-toc-scroll');
    var list = toc.querySelector('.post-toc-list');
    var entries = Array.from(list.querySelectorAll('a')).map(function (link) {
        return {
            link: link,
            item: link.parentElement,
            heading: document.getElementById(decodeURIComponent(link.hash.slice(1)))
        };
    }).filter(function (entry) { return entry.heading; });
    if (!entries.length) return;

    var desktop = window.matchMedia('(min-width: 1280px)');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var article = document.querySelector('.article-entry');
    var navbar = document.querySelector('.navbar-main');
    var active = -1;
    var positions = [];
    var offset = 96;
    var readingFrame = null;
    var measureNeeded = true;
    var pointerInside = false;
    var pointerY = null;
    var pointerFrame = null;

    function revealActive() {
        var keyboardFocus = toc.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
        if (active < 0 || !toc.open || pointerInside || keyboardFocus) return;
        var row = entries[active].item.getBoundingClientRect();
        var bounds = scroller.getBoundingClientRect();
        if (row.top < bounds.top || row.bottom > bounds.bottom) {
            // Only move the directory, never the document's reading position.
            scroller.scrollTop += row.top - bounds.top - bounds.height / 2 + row.height / 2;
        }
    }

    function updateReadingPosition() {
        readingFrame = null;
        if (measureNeeded) {
            offset = Math.max(
                (navbar ? navbar.getBoundingClientRect().height : 52) + 32,
                parseFloat(getComputedStyle(entries[0].heading).scrollMarginTop) || 96
            );
            positions = entries.map(function (entry) {
                return entry.heading.getBoundingClientRect().top + window.scrollY;
            });
            measureNeeded = false;
        }
        var next = 0;
        var readingTop = window.scrollY + offset + 2;
        for (var i = 0; i < positions.length; i++) {
            if (positions[i] <= readingTop) next = i;
            else break;
        }
        if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
            next = entries.length - 1;
        }
        if (next === active) return;
        if (active >= 0) {
            entries[active].item.classList.remove('is-active');
            entries[active].link.removeAttribute('aria-current');
        }
        active = next;
        entries[active].item.classList.add('is-active');
        entries[active].link.setAttribute('aria-current', 'location');
        revealActive();
    }

    function scheduleReading(measure) {
        if (measure === true) measureNeeded = true;
        if (readingFrame === null) readingFrame = requestAnimationFrame(updateReadingPosition);
    }

    function syncViewport() {
        toc.open = desktop.matches;
        scheduleReading(true);
    }

    // Native anchors preserve deep links and browser history. Native details
    // keep the directory usable even if this script is unavailable.
    summary.addEventListener('click', function (event) {
        if (desktop.matches) event.preventDefault();
    });
    list.addEventListener('click', function (event) {
        if (event.target.closest('a') && !desktop.matches && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
            toc.open = false;
            summary.focus({ preventScroll: true });
        }
    });
    toc.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !desktop.matches && toc.open) {
            toc.open = false;
            summary.focus({ preventScroll: true });
        }
    });
    document.addEventListener('click', function (event) {
        if (!desktop.matches && toc.open && !toc.contains(event.target)) toc.open = false;
    });
    toc.addEventListener('toggle', revealActive);

    // A small wave of extending ticks follows the pointer, in the same blue
    // used by the theme's links. Scroll tracking remains independent of hover.
    function paintProximity() {
        pointerFrame = null;
        entries.forEach(function (entry) {
            var rect = entry.item.getBoundingClientRect();
            var distance = pointerY === null ? 100 : Math.abs(pointerY - rect.top - rect.height / 2);
            var amount = Math.max(0, 1 - distance / 90);
            entry.item.style.setProperty('--proximity', (amount * amount * (3 - 2 * amount)).toFixed(3));
        });
    }
    list.addEventListener('pointermove', function (event) {
        if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
        pointerInside = true;
        pointerY = event.clientY;
        if (pointerFrame === null) pointerFrame = requestAnimationFrame(paintProximity);
    });
    list.addEventListener('pointerleave', function () {
        pointerInside = false;
        pointerY = null;
        if (pointerFrame !== null) cancelAnimationFrame(pointerFrame);
        paintProximity();
    });

    window.addEventListener('scroll', scheduleReading, { passive: true });
    window.addEventListener('resize', function () { scheduleReading(true); });
    window.addEventListener('hashchange', function () { scheduleReading(true); });
    window.addEventListener('pageshow', function () { scheduleReading(true); });
    window.addEventListener('load', function () { scheduleReading(true); });
    desktop.addEventListener('change', syncViewport);
    if (typeof ResizeObserver !== 'undefined' && article) {
        new ResizeObserver(function () { scheduleReading(true); }).observe(article);
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () { scheduleReading(true); });
    }
    syncViewport();
})();
