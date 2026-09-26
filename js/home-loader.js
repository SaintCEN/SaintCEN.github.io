/* Canvas 2D adaptation of the Shape Waves visual interaction:
 * https://reactbits.dev/c/backgrounds/shape-waves
 * Geometric bands surround a text cutout; ink fills it as the home page loads.
 */
(function () {
    'use strict';
    var root = document.getElementById('page-loader');
    if (!root) return;
    var canvas = root.querySelector('canvas');
    var context = canvas.getContext('2d');
    var title = root.querySelector('.loader-title');
    var photo = root.querySelector('.loader-landscape');
    var mask = document.createElement('canvas');
    var maskContext = mask.getContext('2d');
    var ink = document.createElement('canvas');
    var inkContext = ink.getContext('2d');
    var motion = matchMedia('(prefers-reduced-motion: reduce)');
    var duration = Number(root.dataset.duration);
    var start = performance.now();
    var last = 0;
    var progress = 0;
    var finishedAt = 0;
    var frame = 0;
    var exitTimer = 0;
    var stopped = false;
    var imageReady = photo.complete;
    var fontsReady = !document.fonts;
    var width = 0, height = 0, dpr = 1;
    var bounds;
    var cells = [];
    var ripples = [];

    function cleanup() {
        if (stopped) return;
        stopped = true;
        cancelAnimationFrame(frame);
        clearTimeout(exitTimer);
        clearTimeout(window.__minosLoaderTimeout);
        window.removeEventListener('resize', resize);
        window.removeEventListener('pagehide', cleanup);
        root.removeEventListener('pointermove', splash);
        root.removeEventListener('pointerdown', splash);
        root.remove();
        canvas.width = mask.width = ink.width = 1;
    }

    function finish() {
        root.setAttribute('aria-valuenow', '100');
        root.classList.add('is-complete');
        exitTimer = setTimeout(cleanup, motion.matches ? 100 : 650);
    }

    if (!context || !maskContext || !inkContext) { cleanup(); return; }
    clearTimeout(window.__minosLoaderTimeout);
    window.__minosLoaderTimeout = setTimeout(cleanup, 8500);

    function resize() {
        width = root.clientWidth;
        height = root.clientHeight;
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        var style = getComputedStyle(title);
        var fontSize = Math.min(180, width * 0.135, height * 0.24);
        maskContext.font = '600 ' + fontSize + 'px ' + style.fontFamily;
        var measured = maskContext.measureText(title.textContent);
        fontSize *= Math.min(1, width * 0.84 / measured.width);
        var font = '600 ' + fontSize + 'px ' + style.fontFamily;
        maskContext.font = font;
        measured = maskContext.measureText(title.textContent);
        var ascent = measured.actualBoundingBoxAscent || fontSize;
        var descent = measured.actualBoundingBoxDescent || fontSize * 0.2;
        bounds = {
            width: Math.ceil(measured.width + 12), height: Math.ceil(ascent + descent + 12),
            x: (width - measured.width - 12) / 2, y: (height - ascent - descent - 12) / 2
        };
        mask.width = ink.width = Math.ceil(bounds.width * dpr);
        mask.height = ink.height = Math.ceil(bounds.height * dpr);
        maskContext.setTransform(dpr, 0, 0, dpr, 0, 0);
        maskContext.font = font;
        maskContext.fillStyle = '#fff';
        maskContext.fillText(title.textContent, 6, ascent + 6);
        cells = [];
        // Bound the grid cost on large monitors; finer cells suit mobile type.
        var step = Math.max(8, Math.sqrt(width * height / 7200));
        for (var y = step / 2; y < height; y += step) {
            for (var x = step / 2; x < width; x += step) {
                cells.push({ x: x, y: y, size: step * 0.28,
                    radial: Math.hypot((x - width / 2) / width, (y - height / 2) / height),
                    seed: Math.sin(x * 12.9898 + y * 78.233) * 0.5 + 0.5 });
            }
        }
        root.classList.add('has-waves');
    }

    function splash(event) {
        if (motion.matches) return;
        var now = performance.now();
        if (ripples.length && now - ripples[ripples.length - 1].time < 90) return;
        ripples.push({ x: event.clientX, y: event.clientY, time: now });
        if (ripples.length > 5) ripples.shift();
    }

    function draw(now) {
        var seconds = (now - start) / 1000;
        context.clearRect(0, 0, width, height);
        ripples = ripples.filter(function (ripple) { return now - ripple.time < 1400; });
        cells.forEach(function (cell) {
            var wave = Math.sin(cell.x / 160 + seconds * 0.8 + Math.cos(cell.y / 190))
                + Math.cos(cell.y / 120 - seconds * 0.6 + Math.sin(cell.x / 220));
            var charge = 0;
            ripples.forEach(function (ripple) {
                var age = (now - ripple.time) / 1000;
                var distance = Math.hypot(cell.x - ripple.x, cell.y - ripple.y);
                charge += Math.exp(-Math.pow((distance - age * 170) / 38, 2)) * (1 - age / 1.4);
            });
            var enter = Math.max(0, Math.min(1, (seconds * 1.2 - cell.radial - cell.seed * 0.12) * 4));
            var size = cell.size * enter * (0.8 + charge * 0.5);
            var band = Math.floor((wave + 2 + charge) * 1.15) % 3;
            context.globalAlpha = (0.16 + (wave + 2) * 0.075 + charge * 0.2) * enter;
            context.fillStyle = charge > 0.2 ? '#a82b2e' : '#353735';
            if (band === 0) context.fillRect(cell.x - size, cell.y - size, size * 2, size * 2);
            else {
                context.beginPath();
                if (band === 1) context.arc(cell.x, cell.y, size, 0, Math.PI * 2);
                else {
                    context.moveTo(cell.x, cell.y - size);
                    context.lineTo(cell.x + size, cell.y + size);
                    context.lineTo(cell.x - size, cell.y + size);
                    context.closePath();
                }
                context.fill();
            }
        });
        // Empty letter interiors are paper white, legible over sky and foliage.
        context.globalAlpha = 1;
        context.globalCompositeOperation = 'destination-out';
        context.drawImage(mask, bounds.x, bounds.y, bounds.width, bounds.height);
        context.globalCompositeOperation = 'source-over';
        context.globalAlpha = 0.9;
        context.drawImage(mask, bounds.x, bounds.y, bounds.width, bounds.height);
        context.globalAlpha = 1;
        inkContext.setTransform(dpr, 0, 0, dpr, 0, 0);
        inkContext.globalCompositeOperation = 'source-over';
        inkContext.clearRect(0, 0, bounds.width, bounds.height);
        var fillY = bounds.height * (1 - progress);
        var amplitude = Math.sin(progress * Math.PI) * 5;
        inkContext.fillStyle = '#171918';
        inkContext.beginPath();
        inkContext.moveTo(0, bounds.height);
        for (var x = 0; x <= bounds.width + 4; x += 4) {
            inkContext.lineTo(x, fillY + Math.sin(x / 48 - seconds * 2.4) * amplitude);
        }
        inkContext.lineTo(bounds.width, bounds.height);
        inkContext.closePath();
        inkContext.fill();
        inkContext.globalCompositeOperation = 'destination-in';
        inkContext.drawImage(mask, 0, 0, bounds.width, bounds.height);
        inkContext.globalCompositeOperation = 'source-over';
        context.drawImage(ink, bounds.x, bounds.y, bounds.width, bounds.height);
    }

    function tick(now) {
        if (stopped) return;
        var elapsed = now - start;
        var delta = Math.min(now - (last || now), 100);
        var ready = imageReady && fontsReady && document.readyState !== 'loading';
        if (motion.matches) {
            progress = 1;
            draw(start + 1800);
            if (ready || elapsed > 1200) { finish(); return; }
        } else if (now - last >= 1000 / 30) {
            var target = ready ? Math.min(1, elapsed / duration) : Math.min(0.88, elapsed / duration * 0.88);
            progress = Math.min(target, progress + delta / 700);
            root.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
            draw(now);
            last = now;
            if (progress >= 1) {
                if (!finishedAt) finishedAt = now;
                if (now - finishedAt > 220) { finish(); return; }
            }
        }
        frame = requestAnimationFrame(tick);
    }

    photo.addEventListener('load', function () { imageReady = true; }, { once: true });
    photo.addEventListener('error', function () { imageReady = true; }, { once: true });
    if (document.fonts) {
        Promise.race([document.fonts.ready, new Promise(function (resolve) { setTimeout(resolve, 900); })])
            .then(function () { fontsReady = true; if (!stopped) resize(); });
    }
    window.addEventListener('resize', resize);
    window.addEventListener('pagehide', cleanup, { once: true });
    root.addEventListener('pointermove', splash, { passive: true });
    root.addEventListener('pointerdown', splash, { passive: true });
    resize();
    frame = requestAnimationFrame(tick);
})();
