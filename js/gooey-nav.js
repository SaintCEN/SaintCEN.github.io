/* React Bits Gooey Nav, DOM integration for Hexo.
 * Copyright (c) 2026 David Haz. MIT + Commons Clause: /licenses/react-bits.txt
 * Source: https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/GooeyNav
 * Use the public demo's props: animationTime=500, distances=[90,0],
 * particleCount=15, particleR=100, timeVariance=300. Animation math is upstream.
 */
(function () {
    'use strict';
    var mounted = null, dispose = null;
    function mount() {
    var container = document.querySelector('.gooey-nav-container');
    if (container && container === mounted) { container.dispatchEvent(new Event('minos:nav-sync')); return; }
    if (dispose) dispose();
    mounted = container;
    if (!container) return;
    var scope = window.MinosPage.createScope();
    dispose = function () { scope.dispose(); };
    var nav = container.querySelector('nav');
    var items = Array.from(nav.querySelectorAll('ul > li'));
    var links = items.map(function (item) { return item.querySelector('.gooey-link'); });
    var filter = container.querySelector('.effect.filter');
    var text = container.querySelector('.effect.text');
    var activeIndex = Math.max(0, items.findIndex(function (item) { return item.classList.contains('active'); }));
    var routeIndex = activeIndex;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var timers = [], frames = [], finishParticles = null, particleCompletion = null;
    var bar = container.closest('.navbar-main');
    var menu = container.closest('.navbar-start');
    var burger = bar.querySelector('.navbar-burger');
    var tools = bar.querySelector('.navbar-end');

    var animationTime = 500, particleCount = 15, particleDistances = [90, 0];
    var particleR = 100, timeVariance = 300, colors = [1, 2, 3, 1, 2, 3, 1, 4];
    function noise(n) { if (n === undefined) n = 1; return n / 2 - Math.random() * n; }
    function getXY(distance, pointIndex, totalPoints) {
        var angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    }
    function createParticle(i, t, d, r) {
        var rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end: getXY(d[1] + noise(7), particleCount - i, particleCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    }
    function clearParticles() {
        if (finishParticles) finishParticles();
        timers.forEach(clearTimeout);
        frames.forEach(cancelAnimationFrame);
        timers = []; frames = [];
        filter.querySelectorAll('.particle').forEach(function (particle) { particle.remove(); });
    }
    function makeParticles() {
        var complete, remaining = particleCount;
        var finished = new Promise(function (resolve) { complete = resolve; });
        var finish = function () {
            if (finishParticles === finish) finishParticles = null;
            complete();
        };
        finishParticles = finish;
        // Animation events account for the original -350ms delay. Fall back
        // if the tab is hidden or a browser suppresses animation events.
        timers.push(setTimeout(finish, 1500));
        filter.style.setProperty('--time', (animationTime * 2 + timeVariance) + 'ms');
        for (var i = 0; i < particleCount; i++) {
            var t = animationTime * 2 + noise(timeVariance * 2);
            var p = createParticle(i, t, particleDistances, particleR);
            filter.classList.remove('active');
            (function (particleData) {
                timers.push(setTimeout(function () {
                    var particle = document.createElement('span');
                    var point = document.createElement('span');
                    particle.classList.add('particle');
                    particle.style.setProperty('--start-x', particleData.start[0] + 'px');
                    particle.style.setProperty('--start-y', particleData.start[1] + 'px');
                    particle.style.setProperty('--end-x', particleData.end[0] + 'px');
                    particle.style.setProperty('--end-y', particleData.end[1] + 'px');
                    particle.style.setProperty('--time', particleData.time + 'ms');
                    particle.style.setProperty('--scale', particleData.scale);
                    particle.style.setProperty('--color', 'var(--color-' + particleData.color + ', white)');
                    particle.style.setProperty('--rotate', particleData.rotate + 'deg');
                    point.classList.add('point');
                    point.addEventListener('animationend', function (event) {
                        if (event.animationName === 'point' && --remaining === 0) finish();
                    });
                    particle.appendChild(point);
                    filter.appendChild(particle);
                    frames.push(requestAnimationFrame(function () { filter.classList.add('active'); }));
                    timers.push(setTimeout(function () { particle.remove(); }, particleData.time));
                }, 30));
            })(p);
        }
        return finished;
    }
    function position() {
        if (!items[activeIndex].getClientRects().length) return;
        var bounds = container.getBoundingClientRect();
        var rect = items[activeIndex].getBoundingClientRect();
        var styles = { left: (rect.x - bounds.x) + 'px', top: (rect.y - bounds.y) + 'px', width: rect.width + 'px', height: rect.height + 'px' };
        Object.assign(filter.style, styles);
        Object.assign(text.style, styles);
        text.innerText = links[activeIndex].innerText;
    }
    function select(index, animate) {
        if (animate && activeIndex === index) return;
        activeIndex = index;
        items.forEach(function (item, i) { item.classList.toggle('active', i === activeIndex); });
        position();
        clearParticles();
        text.classList.remove('active');
        void text.offsetWidth;
        text.classList.add('active');
        if (animate && !reduced.matches) {
            var finished = makeParticles();
            particleCompletion = finished;
            finished.then(function () { if (particleCompletion === finished) particleCompletion = null; });
            container.dispatchEvent(new CustomEvent('minos:nav-animation', {
                bubbles: true, detail: { link: links[index], finished: finished }
            }));
        }
    }
    function closeMenu() {
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
        tools.classList.remove('is-active');
    }
    links.forEach(function (link, index) {
        // Original behavior: selection changes on click, never on hover.
        link.addEventListener('click', function (event) {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            select(index, true);
        });
        link.addEventListener('keydown', function (event) {
            if (event.key === ' ' && link.tagName === 'A') { event.preventDefault(); link.click(); }
        });
    });
    burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') !== 'true';
        burger.setAttribute('aria-expanded', String(open));
        burger.classList.toggle('is-active', open);
        menu.classList.toggle('is-active', open);
        tools.classList.toggle('is-active', open);
        position();
    });
    scope.listen(document, 'click', function (event) {
        if (!bar.contains(event.target)) closeMenu();
    });
    bar.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        if (burger.getAttribute('aria-expanded') === 'true') { closeMenu(); burger.focus(); }
    });
    if (typeof ResizeObserver !== 'undefined') {
        var observer = new ResizeObserver(position);
        observer.observe(container);
        scope.cleanup(function () { observer.disconnect(); });
    }
    scope.cleanup(clearParticles);
    scope.listen(window, 'resize', position);
    scope.listen(window, 'pageshow', function (event) {
        if (event.persisted) { closeMenu(); select(routeIndex, false); }
    });
    scope.listen(window, 'pagehide', clearParticles);
    scope.listen(reduced, 'change', function () { if (reduced.matches) clearParticles(); });
    if (document.fonts) document.fonts.ready.then(function () { if (scope.active) position(); });
    container.addEventListener('minos:nav-sync', function () {
        routeIndex = Math.max(0, items.findIndex(function (item) { return item.classList.contains('active'); }));
        // Keep the expanded mobile navbar visible while its particles finish.
        var pending = particleCompletion;
        if (pending && burger.getAttribute('aria-expanded') === 'true') {
            pending.then(function () {
                if (scope.active && (!particleCompletion || particleCompletion === pending)) closeMenu();
            });
        } else closeMenu();
        if (routeIndex !== activeIndex) select(routeIndex, false);
        else position();
    });
    container.classList.add('gooey-ready');
    select(activeIndex, false);
    }
    document.addEventListener('minos:navbar-ready', mount);
    mount();
})();
