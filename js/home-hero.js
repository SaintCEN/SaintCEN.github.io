/* Native adaptations of React Bits Shape Waves and Specular Button interactions.
 * https://reactbits.dev/components/specular-button
 * https://reactbits.dev/c/backgrounds/shape-waves
 */
(function () {
    'use strict';
    var root = document.querySelector('.home-hero');
    if (!root) return;
    var buttons = Array.from(root.querySelectorAll('.home-button'));
    var canvas = root.querySelector('canvas');
    var photo = root.querySelector('img');
    var context = canvas.getContext('2d');
    var motion = matchMedia('(prefers-reduced-motion: reduce)');
    var width = 0, height = 0;
    var cells = [], ripples = [];
    var frame = 0, last = 0, time = 0;
    var ready = false;

    function point(event) {
        if (motion.matches) return;
        buttons.forEach(function (button) {
            var rect = button.getBoundingClientRect();
            var dx = event.clientX - rect.left - rect.width / 2;
            var dy = event.clientY - rect.top - rect.height / 2;
            var distance = Math.hypot(Math.max(Math.abs(dx) - rect.width / 2, 0), Math.max(Math.abs(dy) - rect.height / 2, 0));
            button.style.setProperty('--shine-angle', (Math.atan2(dy, dx) * 180 / Math.PI + 90) + 'deg');
            button.style.setProperty('--shine', Math.max(0.2, 1 - distance / 240).toFixed(3));
        });
        if (!ready || event.pointerType === 'touch') return;
        if (ripples.length && time - ripples[ripples.length - 1].time < 0.09) return;
        var bounds = root.getBoundingClientRect();
        ripples.push({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, time: time });
        if (ripples.length > 4) ripples.shift();
    }
    root.addEventListener('pointermove', point, { passive: true });
    root.addEventListener('pointerleave', function () {
        buttons.forEach(function (button) { button.style.removeProperty('--shine'); });
    });
    // Links and their CSS borders remain fully usable without canvas support.
    if (!context) return;

    function resize() {
        width = root.clientWidth;
        height = root.clientHeight;
        var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        var step = Math.max(9, Math.sqrt(width * height / 5200));
        cells = [];
        for (var y = step / 2; y < height; y += step) {
            for (var x = step / 2; x < width; x += step) {
                cells.push({ x: x, y: y, size: step * 0.25 });
            }
        }
        if (ready) draw();
    }

    function draw() {
        context.clearRect(0, 0, width, height);
        ripples = ripples.filter(function (ripple) { return time - ripple.time < 1.4; });
        cells.forEach(function (cell) {
            var wave = Math.sin(cell.x / 160 + time * 0.8 + Math.cos(cell.y / 190))
                + Math.cos(cell.y / 120 - time * 0.6 + Math.sin(cell.x / 220));
            var charge = 0;
            ripples.forEach(function (ripple) {
                var age = time - ripple.time;
                var distance = Math.hypot(cell.x - ripple.x, cell.y - ripple.y);
                charge += Math.exp(-Math.pow((distance - age * 170) / 38, 2)) * (1 - age / 1.4);
            });
            var size = cell.size * (0.8 + charge * 0.5);
            var band = Math.floor((wave + 2 + charge) * 1.15) % 3;
            context.globalAlpha = 0.12 + (wave + 2) * 0.045 + charge * 0.16;
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
    }

    function tick(now) {
        if (document.hidden || motion.matches || !ready) { frame = 0; return; }
        if (now - last >= 1000 / 24) {
            time += Math.min((now - (last || now)) / 1000, 0.1);
            last = now;
            draw();
        }
        frame = requestAnimationFrame(tick);
    }

    function syncMotion() {
        cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
        if (!ready || document.hidden) return;
        if (motion.matches) { ripples = []; draw(); }
        else frame = requestAnimationFrame(tick);
    }
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', syncMotion);
    motion.addEventListener('change', syncMotion);
    window.addEventListener('pagehide', function () { cancelAnimationFrame(frame); frame = 0; });
    window.addEventListener('pageshow', syncMotion);
    resize();
    var imageReady = photo.decode ? photo.decode() : new Promise(function (resolve) {
        if (photo.complete) resolve();
        else {
            photo.addEventListener('load', resolve, { once: true });
            photo.addEventListener('error', resolve, { once: true });
        }
    });
    imageReady.catch(function () {}).then(function () {
        ready = true;
        draw();
        root.classList.add('has-waves');
        syncMotion();
    });
})();
