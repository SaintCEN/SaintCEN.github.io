/* Crafteako-inspired editorial photography, using static Hexo documents.
 * Reference: https://github.com/rijulpoudel/crafteako-website
 */
(function () {
    'use strict';
    var root = document.querySelector('.album-world');
    if (!root) return;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var desktop = matchMedia('(min-width: 768px) and (min-height: 740px)');
    var showcase = root.querySelector('.album-showcase');
    if (showcase) {
        var slides = Array.from(showcase.querySelectorAll('.album-slide'));
        var progress = showcase.querySelector('.album-progress span');
        var frame = 0, reset, lastY = scrollY, lastTime = performance.now(), active = 0;
        function update() {
            frame = 0;
            if (!showcase.classList.contains('is-enhanced')) return;
            var bounds = showcase.getBoundingClientRect();
            var distance = showcase.offsetHeight - showcase.querySelector('.album-stage').offsetHeight;
            var percent = Math.max(0, Math.min(1, (52 - bounds.top) / Math.max(1, distance)));
            var next = Math.min(slides.length - 1, Math.floor(percent * slides.length));
            if (active !== next) {
                slides.forEach(function (slide, index) {
                    slide.classList.toggle('is-active', index === next);
                    slide.inert = index !== next;
                });
                active = next;
            }
            progress.style.transform = 'scaleX(' + percent + ')';
            var now = performance.now();
            var velocity = (scrollY - lastY) / Math.max(16, now - lastTime);
            showcase.style.setProperty('--album-skew', Math.max(-8, Math.min(8, velocity * -0.3)) + 'deg');
            showcase.style.setProperty('--album-scale', Math.max(0.92, 1 - Math.abs(velocity) * 0.015));
            lastY = scrollY; lastTime = now;
            clearTimeout(reset);
            reset = setTimeout(function () {
                showcase.style.setProperty('--album-skew', '0deg');
                showcase.style.setProperty('--album-scale', '1');
            }, 120);
        }
        function configure() {
            var enabled = desktop.matches && !reduced.matches && slides.length > 1;
            showcase.classList.toggle('is-enhanced', enabled);
            slides.forEach(function (slide, index) { slide.inert = enabled && index !== active; });
            update();
        }
        window.addEventListener('scroll', function () { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
        window.addEventListener('resize', configure);
        window.addEventListener('pageshow', configure);
        reduced.addEventListener('change', configure);
        configure();
    }

    var photos = Array.from(root.querySelectorAll('.album-photo'));
    if ('IntersectionObserver' in window && !reduced.matches) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -40px 0px' });
        photos.forEach(function (photo) { photo.classList.add('will-reveal'); observer.observe(photo); });
    }

    var dialog = document.querySelector('.album-lightbox');
    if (dialog && typeof dialog.showModal === 'function') {
        var selected = 0, opener;
        var picture = dialog.querySelector('img');
        var caption = dialog.querySelector('figcaption');
        var original = dialog.querySelector('.album-lightbox-original');
        function show(index) {
            selected = (index + photos.length) % photos.length;
            var photo = photos[selected];
            picture.src = photo.dataset.preview;
            picture.alt = photo.querySelector('img').alt;
            caption.textContent = String(selected + 1).padStart(2, '0') + ' / ' + String(photos.length).padStart(2, '0') + (photo.dataset.caption ? ' — ' + photo.dataset.caption : '');
            original.href = photo.href;
        }
        photos.forEach(function (photo, index) {
            photo.addEventListener('click', function (event) {
                if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                opener = photo; show(index); dialog.showModal();
            });
        });
        dialog.querySelector('.album-lightbox-close').addEventListener('click', function () { dialog.close(); });
        dialog.querySelector('.album-lightbox-prev').addEventListener('click', function () { show(selected - 1); });
        dialog.querySelector('.album-lightbox-next').addEventListener('click', function () { show(selected + 1); });
        dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
        dialog.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); show(selected + (event.key === 'ArrowLeft' ? -1 : 1)); }
        });
        dialog.addEventListener('close', function () { if (opener) opener.focus({ preventScroll: true }); });
        var startX, startY;
        picture.addEventListener('touchstart', function (event) { if (event.touches.length === 1) { startX = event.touches[0].clientX; startY = event.touches[0].clientY; } }, { passive: true });
        picture.addEventListener('touchend', function (event) {
            if (startX === undefined) return;
            var dx = event.changedTouches[0].clientX - startX, dy = event.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) show(selected + (dx < 0 ? 1 : -1));
            startX = undefined;
        }, { passive: true });
    }

    // Contextual view cursor is confined to photographs; site navigation keeps its native pointer.
    var fine = matchMedia('(hover: hover) and (pointer: fine)');
    if (fine.matches && !reduced.matches) {
        var cursor = document.createElement('div');
        cursor.className = 'album-cursor'; cursor.setAttribute('aria-hidden', 'true');
        document.body.appendChild(cursor); root.classList.add('has-cursor');
        var x = 0, y = 0, tx = 0, ty = 0, cursorFrame = 0, visible = false;
        function moveCursor() {
            x += (tx - x) * 0.25; y += (ty - y) * 0.25;
            cursor.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%,-50%)';
            cursorFrame = visible && Math.abs(tx - x) + Math.abs(ty - y) > 0.2 ? requestAnimationFrame(moveCursor) : 0;
        }
        function hideCursor() { visible = false; cursor.style.opacity = 0; }
        root.addEventListener('pointermove', function (event) {
            var target = event.target.closest('[data-album-cursor]');
            if (!target || reduced.matches || !fine.matches) { hideCursor(); return; }
            tx = event.clientX; ty = event.clientY;
            if (!visible) { x = tx; y = ty; }
            visible = true; cursor.style.opacity = 1; cursor.textContent = target.dataset.albumCursor;
            if (!cursorFrame) cursorFrame = requestAnimationFrame(moveCursor);
        });
        root.addEventListener('pointerleave', hideCursor);
        window.addEventListener('scroll', hideCursor, { passive: true });
        window.addEventListener('pagehide', hideCursor);
        reduced.addEventListener('change', function () { root.classList.toggle('has-cursor', !reduced.matches); hideCursor(); });
    }
})();
