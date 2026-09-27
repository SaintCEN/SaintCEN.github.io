/* InlineMenuLayout by Codrops, MIT (licenses/InlineMenuLayout.txt).
 * Original hover reveal and menu/content GSAP timelines, scoped to Hexo's
 * single-document page lifecycle. Custom cursor and demo-only UI omitted.
 */
(function () {
    'use strict';

    var root = document.querySelector('[data-inline-archive]');
    if (!root || !window.gsap || !window.MinosPage) return;

    var gsap = window.gsap;
    var scope = window.MinosPage.scope;
    var reduced = matchMedia('(prefers-reduced-motion: reduce)');
    var animations = new Set();
    var mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    var previousMouse = { x: mouse.x, y: mouse.y };

    function lerp(a, b, amount) { return (1 - amount) * a + amount * b; }
    function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
    function map(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    function trackedTimeline(options) {
        options = options || {};
        var finished = options.onComplete;
        var animation = gsap.timeline(Object.assign({}, options, {
            onComplete: function () {
                animations.delete(animation);
                if (finished) finished();
            }
        }));
        if (reduced.matches) animation.timeScale(1000000);
        animations.add(animation);
        return animation;
    }

    scope.listen(window, 'pointermove', function (event) {
        mouse = { x: event.clientX, y: event.clientY };
    }, { passive: true });

    function MenuItem(element, sharedProperties) {
        this.DOM = {
            el: element,
            inner: element.querySelector('.inline-archive__menu-label'),
            number: element.querySelector('.inline-archive__menu-number')
        };
        this.properties = sharedProperties;
        this.requestId = 0;
        this.firstFrame = true;
        this.layout();
        this.bind();
    }

    MenuItem.prototype.layout = function () {
        var reveal = document.createElement('span');
        var inner = document.createElement('span');
        var image = document.createElement('span');
        reveal.className = 'inline-archive__hover-reveal';
        inner.className = 'inline-archive__hover-reveal-inner';
        image.className = 'inline-archive__hover-reveal-image';
        reveal.style.transformOrigin = '0% 0%';
        image.style.backgroundImage = 'url("' + this.DOM.el.dataset.img.replace(/"/g, '%22') + '")';
        inner.appendChild(image);
        reveal.appendChild(inner);
        this.DOM.el.appendChild(reveal);
        this.DOM.reveal = reveal;
        this.DOM.revealInner = inner;
        this.DOM.revealImage = image;
    };

    MenuItem.prototype.bind = function () {
        var self = this;
        scope.listen(this.DOM.el, 'mouseenter', function () {
            if (self.DOM.el.disabled) return;
            self.showImage();
            self.firstFrame = true;
            self.loop();
        });
        scope.listen(this.DOM.el, 'mouseleave', function () {
            self.stop();
            self.hideImage();
        });
        scope.listen(this.DOM.el, 'focus', function () {
            if (!matchMedia('(any-hover: hover)').matches) return;
            self.showImage();
        });
        scope.listen(this.DOM.el, 'blur', function () { self.hideImage(); });
    };

    MenuItem.prototype.bounds = function () {
        this.box = {
            el: this.DOM.el.getBoundingClientRect(),
            reveal: this.DOM.reveal.getBoundingClientRect()
        };
    };

    MenuItem.prototype.showImage = function () {
        gsap.killTweensOf([this.DOM.revealInner, this.DOM.revealImage]);
        var self = this;
        return trackedTimeline({
            defaults: { duration: 0.8, ease: 'quint' },
            onStart: function () {
                self.DOM.reveal.style.opacity = 1;
                self.DOM.revealInner.style.opacity = 1;
                gsap.set(self.DOM.el, { zIndex: 10 });
            }
        })
            .to(this.DOM.revealInner, {
                startAt: { x: '-50%', y: '150%', rotation: 10 },
                x: '0%', y: '0%'
            }, 0)
            .to(this.DOM.revealInner, {
                duration: 1, ease: 'expo', startAt: { scale: 0.2 }, scale: 1
            }, 0)
            .to(this.DOM.revealImage, {
                duration: 1, ease: 'expo', startAt: { scale: 1.8 }, scale: 1
            }, 0);
    };

    MenuItem.prototype.hideImage = function () {
        var self = this;
        gsap.killTweensOf([this.DOM.revealInner, this.DOM.revealImage]);
        return new Promise(function (resolve) {
            trackedTimeline({
                defaults: { duration: 0.8, ease: 'quint' },
                onStart: function () { gsap.set(self.DOM.el, { zIndex: 1 }); },
                onComplete: function () {
                    gsap.set(self.DOM.reveal, { opacity: 0 });
                    resolve();
                }
            })
                .to(self.DOM.revealInner, {
                    scale: 0.8, x: '50%', y: '-150%', opacity: 0
                })
                .to(self.DOM.revealImage, { scale: 1.8 }, 0);
        });
    };

    MenuItem.prototype.loop = function () {
        var self = this;
        if (!this.requestId) this.requestId = requestAnimationFrame(function () { self.render(); });
    };

    MenuItem.prototype.stop = function () {
        if (!this.requestId) return;
        cancelAnimationFrame(this.requestId);
        this.requestId = 0;
    };

    MenuItem.prototype.render = function () {
        this.requestId = 0;
        if (this.firstFrame) this.bounds();
        var distanceX = clamp(Math.abs(previousMouse.x - mouse.x), 0, 100);
        var directionX = previousMouse.x - mouse.x;
        previousMouse = { x: mouse.x, y: mouse.y };
        this.properties.tx.current = mouse.x - this.box.el.left - this.box.reveal.width / 2;
        this.properties.ty.current = mouse.y - this.box.el.top - this.box.reveal.height / 2;
        this.properties.rotation.current = this.firstFrame ? 0 : map(distanceX, 0, 200, 0, directionX < 0 ? -100 : 100);
        this.properties.tx.previous = this.firstFrame ? this.properties.tx.current : lerp(this.properties.tx.previous, this.properties.tx.current, this.properties.tx.amount);
        this.properties.ty.previous = this.firstFrame ? this.properties.ty.current : lerp(this.properties.ty.previous, this.properties.ty.current, this.properties.ty.amount);
        this.properties.rotation.previous = this.firstFrame ? this.properties.rotation.current : lerp(this.properties.rotation.previous, this.properties.rotation.current, this.properties.rotation.amount);
        gsap.set(this.DOM.reveal, {
            x: this.properties.tx.previous,
            y: this.properties.ty.previous,
            rotation: this.properties.rotation.previous
        });
        this.firstFrame = false;
        this.loop();
    };

    function ContentItem(element) {
        this.DOM = {
            el: element,
            title: element.querySelector('.inline-archive__content-title-inner'),
            number: element.querySelector('.inline-archive__content-title-number'),
            images: Array.from(element.querySelectorAll('.inline-archive__gallery-image-inner')),
            titles: Array.from(element.querySelectorAll('.inline-archive__gallery-title')),
            meta: Array.from(element.querySelectorAll('.inline-archive__gallery-meta, .inline-archive__gallery-summary')),
            more: Array.from(element.querySelectorAll('.inline-archive__gallery-more'))
        };
        this.bindCardHover();
    }

    ContentItem.prototype.bindCardHover = function () {
        var self = this;
        this.DOM.more.forEach(function (more, index) {
            var image = self.DOM.images[index];
            scope.listen(more, 'mouseenter', function () {
                gsap.killTweensOf(image);
                gsap.to(image, { duration: 1, ease: 'expo', scale: 0.95 });
            });
            scope.listen(more, 'mouseleave', function () {
                gsap.killTweensOf(image);
                gsap.to(image, { duration: 0.5, ease: 'expo', scale: 1 });
            });
        });
    };

    function Controller() {
        this.DOM = {
            menu: root.querySelector('.inline-archive__menu'),
            back: root.querySelector('.inline-archive__back')
        };
        this.DOM.menuItems = Array.from(this.DOM.menu.querySelectorAll('[data-inline-menu-item]'));
        this.DOM.contents = Array.from(root.querySelectorAll('[data-inline-content]'));
        this.sharedProperties = {
            tx: { previous: 0, current: 0, amount: 0.08 },
            ty: { previous: 0, current: 0, amount: 0.08 },
            rotation: { previous: 0, current: 0, amount: 0.05 }
        };
        this.items = this.DOM.menuItems.map(function (item) { return new MenuItem(item, this.sharedProperties); }, this);
        this.contents = this.DOM.contents.map(function (content) { return new ContentItem(content); });
        this.currentIndex = -1;
        this.animating = false;
        this.bind();
    }

    Controller.prototype.bind = function () {
        var self = this;
        this.DOM.menuItems.forEach(function (item, index) {
            scope.listen(item, 'click', function () { self.open(index); });
        });
        scope.listen(this.DOM.back, 'click', function () { self.close(); });
        scope.listen(root, 'keydown', function (event) {
            if (event.key === 'Escape' && self.currentIndex >= 0 && !self.animating) {
                event.preventDefault();
                self.close();
            }
        });
    };

    Controller.prototype.data = function (position) {
        return {
            item: this.items[position],
            texts: this.items.map(function (item) { return item.DOM.inner; }),
            numbers: this.items.map(function (item) { return item.DOM.number; }),
            content: this.contents[position]
        };
    };

    Controller.prototype.open = function (position) {
        if (this.animating || position < 0 || position >= this.items.length) return;
        this.animating = true;
        this.currentIndex = position;
        var self = this;
        var data = this.data(position);
        var item = data.item;
        var content = data.content;
        item.DOM.el.setAttribute('aria-expanded', 'true');
        this.DOM.menu.style.pointerEvents = 'none';
        item.stop();
        item.DOM.el.style.pointerEvents = 'auto';
        item.hideImage().then(function () { item.DOM.el.style.pointerEvents = 'none'; });
        content.DOM.el.removeAttribute('inert');
        content.DOM.el.setAttribute('aria-hidden', 'false');

        trackedTimeline({
            defaults: { duration: 1, ease: 'expo' },
            onComplete: function () {
                self.animating = false;
                self.DOM.back.focus({ preventScroll: true });
            }
        })
            .addLabel('hideMenu', 0)
            .set(data.texts.concat([content.DOM.title]), { transformOrigin: '50% 100%' }, 'hideMenu')
            .set(content.DOM.title, { opacity: 0, y: '101%' }, 'hideMenu')
            .set(content.DOM.number, { scale: 0 }, 'hideMenu')
            .set(content.DOM.images, { y: '101%' }, 'hideMenu')
            .set(content.DOM.titles.concat(content.DOM.meta, content.DOM.more), { opacity: 0 }, 'hideMenu')
            .to(data.numbers, {
                duration: 0.3, ease: 'sine', scale: 0, opacity: 0,
                stagger: { from: position, each: 0.01 }
            }, 'hideMenu')
            .to(data.texts, {
                duration: 0.1, ease: 'quad.in', scaleY: 1.5,
                stagger: { from: position, each: 0.01 }
            }, 'hideMenu')
            .to(data.texts, {
                duration: 0.8, ease: 'expo', scaleY: 1, y: '-100%', opacity: 0,
                stagger: { from: position, each: 0.01 }
            }, 'hideMenu+=0.1')
            .addLabel('showContent', 0.3)
            .add(function () { content.DOM.el.classList.add('is-current'); }, 'showContent')
            .set(this.DOM.back, { pointerEvents: 'auto' }, 'showContent')
            .to(this.DOM.back, { startAt: { x: '-100%' }, opacity: 1, x: '0%' }, 'showContent')
            .to(content.DOM.title, { duration: 0.1, ease: 'quad.in', scaleY: 1.5, opacity: 1 }, 'showContent')
            .to(content.DOM.title, { duration: 0.8, ease: 'expo', scaleY: 1, startAt: { y: '100%' }, y: '0%' }, 'showContent+=0.1')
            .to(content.DOM.number, { scale: 1 }, 'showContent')
            .to(content.DOM.images, { y: '0%', stagger: 0.02 }, 'showContent+=0.1')
            .to(content.DOM.titles.concat(content.DOM.meta), {
                startAt: { y: '100%' }, y: '0%', opacity: 1, stagger: 0.02
            }, 'showContent+=0.2')
            .to(content.DOM.more, {
                startAt: { scale: 0 }, scale: 1, opacity: 1, stagger: 0.02
            }, 'showContent+=0.2');
    };

    Controller.prototype.close = function () {
        if (this.animating || this.currentIndex < 0) return;
        this.animating = true;
        var self = this;
        var data = this.data(this.currentIndex);
        var item = data.item;
        var content = data.content;

        trackedTimeline({
            defaults: { duration: 0.4, ease: 'power3.in' },
            onComplete: function () {
                self.animating = false;
                self.currentIndex = -1;
                item.DOM.el.setAttribute('aria-expanded', 'false');
                item.DOM.el.focus({ preventScroll: true });
            }
        })
            .addLabel('hideContent', 0)
            .set(data.texts.concat([content.DOM.title]), { transformOrigin: '50% 0%' }, 'hideContent')
            .set(this.DOM.back, { pointerEvents: 'none' }, 'hideContent')
            .to(this.DOM.back, { opacity: 0, x: '-100%' }, 'hideContent')
            .to(content.DOM.meta.concat(content.DOM.titles), {
                y: '100%', opacity: 0, stagger: 0.02
            }, 'hideContent')
            .to(content.DOM.more, { scale: 0, opacity: 0, stagger: 0.02 }, 'hideContent')
            .to(content.DOM.images, { y: '101%', stagger: 0.02 }, 'hideContent+=0.1')
            .to(content.DOM.number, { scale: 0 }, 'hideContent+=0.1')
            .to(content.DOM.title, { y: '100%', opacity: 1 }, 'hideContent+=0.1')
            .addLabel('showMenu', 0.6)
            .add(function () {
                content.DOM.el.classList.remove('is-current');
                content.DOM.el.setAttribute('aria-hidden', 'true');
                content.DOM.el.setAttribute('inert', '');
            }, 'showMenu')
            .add(function () {
                self.DOM.menu.style.pointerEvents = '';
                item.DOM.el.style.pointerEvents = '';
            }, 'showMenu')
            .to(data.numbers, {
                duration: 0.3, ease: 'sine', scale: 1, opacity: 1,
                stagger: { from: this.currentIndex, each: 0.01 }
            }, 'showMenu')
            .to(data.texts, {
                duration: 0.1, ease: 'quad.in', scaleY: 1.5, opacity: 1,
                stagger: { from: this.currentIndex, each: 0.01 }
            }, 'showMenu')
            .to(data.texts, {
                duration: 0.8, ease: 'expo', scaleY: 1, y: '0%',
                stagger: { from: this.currentIndex, each: 0.01 }
            }, 'showMenu+=0.1');
    };

    var controller = new Controller();
    root.classList.add('is-enhanced');

    var hash = location.hash.slice(1);
    if (hash) {
        var hashIndex = controller.DOM.menuItems.findIndex(function (item) { return item.dataset.target === hash; });
        if (hashIndex >= 0) requestAnimationFrame(function () { if (scope.active) controller.open(hashIndex); });
    }

    scope.listen(reduced, 'change', function () {
        if (reduced.matches) animations.forEach(function (animation) { animation.progress(1); });
    });
    scope.cleanup(function () {
        controller.items.forEach(function (item) { item.stop(); });
        animations.forEach(function (animation) { animation.kill(); });
        gsap.killTweensOf([root].concat(Array.from(root.querySelectorAll('*'))));
    });
}());
