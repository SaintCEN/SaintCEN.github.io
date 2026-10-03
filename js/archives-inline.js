/* InlineMenuLayout and Horizontal Parallax Gallery by Codrops, MIT
 * (licenses/InlineMenuLayout.txt, licenses/HorizontalParallaxGallery.txt).
 * Original hover reveal, menu/content timelines and 2D/DOM parallax model,
 * scoped to Hexo's single-document page lifecycle.
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

    function MenuItem(element, sharedProperties, requestPreview) {
        this.DOM = {
            el: element,
            host: element.parentElement,
            inner: element.querySelector('.inline-archive__menu-label'),
            number: element.querySelector('.inline-archive__menu-number')
        };
        this.properties = sharedProperties;
        this.requestPreview = requestPreview;
        this.requestId = 0;
        this.firstFrame = true;
        this.pointerInside = false;
        this.focusVisible = false;
        this.previewTimeline = null;
        this.layout();
        this.bind();
    }

    MenuItem.prototype.layout = function () {
        var reveal = document.createElement('span');
        var inner = document.createElement('span');
        var image = document.createElement('img');
        reveal.className = 'inline-archive__hover-reveal';
        inner.className = 'inline-archive__hover-reveal-inner';
        image.className = 'inline-archive__hover-reveal-image';
        reveal.style.transformOrigin = '0% 0%';
        image.src = this.DOM.el.dataset.img;
        image.alt = '';
        image.decoding = 'async';
        image.draggable = false;
        inner.appendChild(image);
        reveal.appendChild(inner);
        this.DOM.host.appendChild(reveal);
        this.DOM.reveal = reveal;
        this.DOM.revealInner = inner;
        this.DOM.revealImage = image;
    };

    MenuItem.prototype.bind = function () {
        var self = this;
        scope.listen(this.DOM.el, 'mouseenter', function () {
            if (self.DOM.el.disabled) return;
            self.pointerInside = true;
            self.requestPreview(self);
            self.showImage();
            self.firstFrame = true;
            self.loop();
        });
        scope.listen(this.DOM.el, 'mouseleave', function () {
            self.pointerInside = false;
            if (!self.focusVisible) {
                self.stop();
                self.hideImage();
            }
        });
        scope.listen(this.DOM.el, 'focus', function () {
            if (!matchMedia('(any-hover: hover)').matches) return;
            requestAnimationFrame(function () {
                if (!scope.active || !self.DOM.el.matches(':focus-visible')) return;
                self.focusVisible = true;
                self.requestPreview(self);
                var rect = self.DOM.el.getBoundingClientRect();
                mouse = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
                previousMouse = { x: mouse.x, y: mouse.y };
                self.showImage();
                self.firstFrame = true;
                self.loop();
            });
        });
        scope.listen(this.DOM.el, 'blur', function () {
            self.focusVisible = false;
            if (!self.pointerInside) {
                self.stop();
                self.hideImage();
            }
        });
    };

    MenuItem.prototype.bounds = function () {
        this.box = {
            el: this.DOM.el.getBoundingClientRect(),
            host: this.DOM.host.getBoundingClientRect(),
            reveal: this.DOM.reveal.getBoundingClientRect()
        };
    };

    MenuItem.prototype.showImage = function () {
        if (this.previewTimeline) this.previewTimeline.kill();
        gsap.killTweensOf([this.DOM.reveal, this.DOM.revealInner, this.DOM.revealImage]);
        var self = this;
        this.previewTimeline = trackedTimeline({
            defaults: { duration: 0.8, ease: 'quint' },
            onStart: function () {
                self.DOM.reveal.style.opacity = 1;
                self.DOM.revealInner.style.opacity = 1;
                gsap.set(self.DOM.el, { zIndex: 10 });
            }
        });
        return this.previewTimeline
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
        if (this.previewTimeline) this.previewTimeline.kill();
        gsap.killTweensOf([this.DOM.reveal, this.DOM.revealInner, this.DOM.revealImage]);
        return new Promise(function (resolve) {
            self.previewTimeline = trackedTimeline({
                defaults: { duration: 0.8, ease: 'quint' },
                onStart: function () { gsap.set(self.DOM.el, { zIndex: 1 }); },
                onComplete: function () {
                    gsap.set(self.DOM.reveal, { opacity: 0 });
                    self.previewTimeline = null;
                    resolve();
                }
            });
            self.previewTimeline
                .to(self.DOM.revealInner, {
                    scale: 0.8, x: '50%', y: '-150%', opacity: 0
                })
                .to(self.DOM.revealImage, { scale: 1.8 }, 0);
        });
    };

    MenuItem.prototype.resetImage = function () {
        this.pointerInside = false;
        this.focusVisible = false;
        this.stop();
        if (this.previewTimeline) this.previewTimeline.kill();
        this.previewTimeline = null;
        gsap.killTweensOf([this.DOM.reveal, this.DOM.revealInner, this.DOM.revealImage]);
        gsap.set(this.DOM.reveal, { opacity: 0 });
        gsap.set(this.DOM.revealInner, { opacity: 0 });
        gsap.set(this.DOM.el, { zIndex: 1 });
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
        this.properties.tx.current = mouse.x - this.box.host.left - this.box.reveal.width / 2;
        // The category menu sits below the gallery, so unfold previews above
        // the pointer and keep the full image inside the archive viewport.
        this.properties.ty.current = mouse.y - this.box.host.top - this.box.reveal.height - 18;
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

    // 2D/DOM horizontal parallax model from Horizontal Parallax Gallery.
    // Vertical wheel input drives a horizontally translated track while each
    // oversized image counter-moves according to its distance from the center.
    function HorizontalGallery(wrapper) {
        this.DOM = {
            wrapper: wrapper,
            track: wrapper.querySelector('.inline-archive__gallery'),
            images: Array.from(wrapper.querySelectorAll('.inline-archive__gallery-image-media'))
        };
        this.scroll = { current: 0, target: 0, ease: 0.07, limit: 0 };
        this.requestId = 0;
        this.running = false;
        this.drag = { active: false, pointerId: null, startX: 0, lastX: 0, moved: false };
        this.suppressClick = false;
        this.bindDrag();
    }

    HorizontalGallery.prototype.bindDrag = function () {
        var self = this;
        scope.listen(this.DOM.wrapper, 'pointerdown', function (event) {
            if (!self.running || !event.isPrimary || event.button !== 0) return;
            self.drag.active = true;
            self.drag.pointerId = event.pointerId;
            self.drag.startX = event.clientX;
            self.drag.lastX = event.clientX;
            self.drag.moved = false;
            self.suppressClick = false;
            self.DOM.wrapper.classList.add('is-dragging');
        });
        scope.listen(this.DOM.wrapper, 'pointermove', function (event) {
            if (!self.drag.active || event.pointerId !== self.drag.pointerId) return;
            var delta = event.clientX - self.drag.lastX;
            self.drag.lastX = event.clientX;
            if (!self.drag.moved && Math.abs(event.clientX - self.drag.startX) > 5) {
                self.drag.moved = true;
                if (self.DOM.wrapper.setPointerCapture) {
                    try { self.DOM.wrapper.setPointerCapture(event.pointerId); } catch (error) {}
                }
            }
            if (!self.drag.moved) return;
            self.scroll.target = clamp(self.scroll.target - delta, 0, self.scroll.limit);
            if (event.cancelable) event.preventDefault();
        }, { passive: false });
        function finish(event) {
            if (!self.drag.active || event.pointerId !== self.drag.pointerId) return;
            self.suppressClick = self.drag.moved;
            self.drag.active = false;
            self.drag.pointerId = null;
            self.DOM.wrapper.classList.remove('is-dragging');
            if (self.DOM.wrapper.releasePointerCapture) {
                try { self.DOM.wrapper.releasePointerCapture(event.pointerId); } catch (error) {}
            }
            setTimeout(function () { self.suppressClick = false; }, 0);
        }
        scope.listen(this.DOM.wrapper, 'pointerup', finish);
        scope.listen(this.DOM.wrapper, 'pointercancel', finish);
        scope.listen(this.DOM.wrapper, 'click', function (event) {
            if (!self.suppressClick) return;
            event.preventDefault();
            event.stopPropagation();
            self.suppressClick = false;
        }, { capture: true });
    };

    HorizontalGallery.prototype.setLimit = function () {
        this.scroll.limit = Math.max(0, this.DOM.track.scrollWidth - this.DOM.wrapper.clientWidth);
        this.scroll.target = clamp(this.scroll.target, 0, this.scroll.limit);
        this.scroll.current = clamp(this.scroll.current, 0, this.scroll.limit);
    };

    HorizontalGallery.prototype.applyParallax = function () {
        var wrapperRect = this.DOM.wrapper.getBoundingClientRect();
        var viewportCenter = wrapperRect.left + wrapperRect.width * 0.5;
        var halfViewport = Math.max(1, wrapperRect.width * 0.5);
        this.DOM.images.forEach(function (image) {
            var frame = image.parentElement;
            if (!frame) return;
            var rect = frame.getBoundingClientRect();
            var elementCenter = rect.left + rect.width * 0.5;
            var distance = clamp((elementCenter - viewportCenter) / halfViewport, -1, 1);
            image.style.transform = 'translate3d(' + (-distance * 10) + '%, 0, 0)';
        });
    };

    HorizontalGallery.prototype.render = function () {
        if (!this.running || !scope.active) return;
        this.scroll.target = clamp(this.scroll.target, 0, this.scroll.limit);
        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        if (Math.abs(this.scroll.target - this.scroll.current) < 0.01) this.scroll.current = this.scroll.target;
        this.DOM.track.style.transform = 'translate3d(' + (this.scroll.current < 0.01 ? 0 : -this.scroll.current) + 'px, 0, 0)';
        this.applyParallax();
        var self = this;
        this.requestId = requestAnimationFrame(function () { self.render(); });
    };

    HorizontalGallery.prototype.open = function () {
        this.stop();
        this.scroll.current = 0;
        this.scroll.target = 0;
        this.DOM.track.style.transform = 'translate3d(0, 0, 0)';
        this.setLimit();
        this.running = true;
        this.render();
    };

    HorizontalGallery.prototype.stop = function () {
        this.running = false;
        this.drag.active = false;
        this.drag.pointerId = null;
        this.DOM.wrapper.classList.remove('is-dragging');
        if (this.requestId) cancelAnimationFrame(this.requestId);
        this.requestId = 0;
    };

    HorizontalGallery.prototype.addWheel = function (delta) {
        if (!this.running || this.scroll.limit <= 0) return false;
        this.scroll.target += delta;
        return true;
    };

    HorizontalGallery.prototype.resize = function () {
        this.setLimit();
        this.applyParallax();
    };

    function ContentItem(element) {
        this.DOM = {
            el: element,
            cards: Array.from(element.querySelectorAll('.inline-archive__gallery-item')),
            gallery: element.querySelector('[data-horizontal-gallery]')
        };
        this.gallery = new HorizontalGallery(this.DOM.gallery);
    }

    function Controller() {
        this.DOM = {
            menu: root.querySelector('.inline-archive__menu'),
            contentWrap: root.querySelector('.inline-archive__content-wrap')
        };
        this.DOM.menuItems = Array.from(this.DOM.menu.querySelectorAll('[data-inline-menu-item]'));
        this.DOM.contents = Array.from(root.querySelectorAll('[data-inline-content]'));
        this.DOM.titles = Array.from(root.querySelectorAll('.inline-archive__gallery-title'));
        this.sharedProperties = {
            tx: { previous: 0, current: 0, amount: 0.08 },
            ty: { previous: 0, current: 0, amount: 0.08 },
            rotation: { previous: 0, current: 0, amount: 0.05 }
        };
        var self = this;
        this.items = this.DOM.menuItems.map(function (item) {
            return new MenuItem(item, self.sharedProperties, function (activeItem) {
                self.items.forEach(function (menuItem) {
                    if (menuItem !== activeItem) menuItem.resetImage();
                });
            });
        });
        this.contents = this.DOM.contents.map(function (content) { return new ContentItem(content); });
        this.currentIndex = 0;
        this.pendingIndex = -1;
        this.animating = false;
        this.bind();
        this.activateInitial();
        this.fitLayout();
    }

    Controller.prototype.fitTitles = function () {
        this.DOM.titles.forEach(function (title) {
            // Start at the stylesheet size so titles can grow again on resize.
            title.style.removeProperty('--archive-title-size');
            var link = title.querySelector('a');
            var available = title.clientWidth;
            if (!link || available <= 0) return;
            var width = link.getBoundingClientRect().width;
            var size = parseFloat(getComputedStyle(title).fontSize);
            for (var step = 0; step < 3 && width > available; step += 1) {
                size *= (available - 0.5) / width;
                title.style.setProperty('--archive-title-size', size + 'px');
                width = link.getBoundingClientRect().width;
            }
        });
    };

    Controller.prototype.cardFrameHeightAt = function (width) {
        root.style.setProperty('--archive-fitted-card-width', width + 'px');
        this.fitTitles();
        return this.DOM.contents.reduce(function (maximum, content) {
            var frame = content.querySelector('.inline-archive__gallery');
            return frame ? Math.max(maximum, frame.getBoundingClientRect().height) : maximum;
        }, 0);
    };

    Controller.prototype.fitLayout = function () {
        var host = root.parentElement;
        var firstCard = root.querySelector('.inline-archive__gallery-item');
        if (!host || !firstCard || !this.DOM.menu) return;

        root.style.removeProperty('--archive-layout-height');
        root.style.removeProperty('--archive-fitted-card-width');

        var maximumHeight = host.clientHeight;
        var targetHeight = root.getBoundingClientRect().height;
        var styles = getComputedStyle(root);
        var gap = parseFloat(styles.rowGap) || 0;
        var menuHeight = this.DOM.menu.getBoundingClientRect().height;
        var availableForCards = Math.max(0, maximumHeight - menuHeight - gap);
        var desiredWidth = firstCard.getBoundingClientRect().width;
        var minimumWidth = Math.min(224, desiredWidth);
        var cardHeight = this.cardFrameHeightAt(desiredWidth);

        if (cardHeight > availableForCards && desiredWidth > minimumWidth) {
            var low = minimumWidth;
            var high = desiredWidth;
            for (var step = 0; step < 9; step += 1) {
                var middle = (low + high) / 2;
                if (this.cardFrameHeightAt(middle) <= availableForCards) low = middle;
                else high = middle;
            }
            desiredWidth = low;
            cardHeight = this.cardFrameHeightAt(desiredWidth);
        }

        var requiredHeight = cardHeight + gap + menuHeight;
        root.style.setProperty('--archive-layout-height', Math.min(maximumHeight, Math.max(targetHeight, requiredHeight)) + 'px');
        this.contents.forEach(function (content) { content.gallery.resize(); });
    };

    Controller.prototype.bind = function () {
        var self = this;
        this.DOM.menuItems.forEach(function (item) {
            scope.listen(item, 'click', function () {
                var target = item.dataset.target;
                var position = self.DOM.contents.findIndex(function (content) { return content.id === target; });
                if (position >= 0) self.select(position);
            });
        });
        scope.listen(this.DOM.menu, 'mouseleave', function () {
            self.items.forEach(function (item) {
                if (!item.focusVisible) item.resetImage();
            });
        });
        scope.listen(window, 'blur', function () {
            self.items.forEach(function (item) { item.resetImage(); });
        });
        scope.listen(document, 'visibilitychange', function () {
            if (document.hidden) self.items.forEach(function (item) { item.resetImage(); });
        });
        scope.listen(root, 'wheel', function (event) {
            var gallery = self.contents[self.currentIndex].gallery;
            var raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
            var delta = event.deltaMode === 1 ? raw * 16 : event.deltaMode === 2 ? raw * innerHeight : raw;
            if (gallery.addWheel(delta)) event.preventDefault();
        }, { passive: false });
        scope.listen(window, 'resize', function () {
            self.fitLayout();
        });
        scope.listen(window, 'hashchange', function () {
            var hash = location.hash.slice(1);
            var position = hash ? self.DOM.contents.findIndex(function (content) {
                return content.id === hash;
            }) : 0;
            if (position >= 0) self.select(position);
        });
    };

    Controller.prototype.activateInitial = function () {
        var hash = location.hash.slice(1);
        var position = hash ? this.DOM.contents.findIndex(function (content) {
            return content.id === hash;
        }) : 0;
        var filterHash = position >= 0 && !!hash;
        if (position < 0) position = 0;
        this.currentIndex = position;
        var target = this.DOM.contents[position].id;
        this.DOM.menuItems.forEach(function (item) {
            var selected = item.dataset.target === target;
            item.classList.toggle('is-selected', selected);
            item.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });
        this.contents.forEach(function (content, index) {
            var selected = index === position;
            content.DOM.el.classList.toggle('is-current', selected);
            content.DOM.el.setAttribute('aria-hidden', selected ? 'false' : 'true');
            if (selected) content.DOM.el.removeAttribute('inert');
            else content.DOM.el.setAttribute('inert', '');
        });
        var self = this;
        function resetFilterScroll() {
            var archiveSection = root.closest('.archive-inline-section');
            if (archiveSection) {
                archiveSection.scrollTop = 0;
                archiveSection.scrollLeft = 0;
            }
            var contentWrap = root.querySelector('.inline-archive__content-wrap');
            if (contentWrap) {
                contentWrap.scrollTop = 0;
                contentWrap.scrollLeft = 0;
            }
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
        requestAnimationFrame(function () {
            if (!scope.active) return;
            // A tag/category hash is UI state rather than a document anchor.
            // Cancel the browser's native fragment jump on direct visits.
            if (filterHash) resetFilterScroll();
            self.contents[position].gallery.open();
        });
        if (filterHash && document.readyState !== 'complete') {
            scope.listen(window, 'load', resetFilterScroll, { once: true });
        }
    };

    Controller.prototype.updateSelection = function (position) {
        var target = this.DOM.contents[position].id;
        this.DOM.menuItems.forEach(function (item) {
            var selected = item.dataset.target === target;
            item.classList.toggle('is-selected', selected);
            item.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });
        var nextURL = location.pathname + location.search + (position === 0 ? '' : '#' + target);
        history.replaceState(history.state, '', nextURL);
    };

    Controller.prototype.select = function (position) {
        if (position < 0 || position >= this.contents.length) return;
        if (this.animating) {
            this.pendingIndex = position;
            return;
        }
        if (position === this.currentIndex) return;
        this.animating = true;
        var self = this;
        var previousIndex = this.currentIndex;
        var previous = this.contents[previousIndex];
        var incoming = this.contents[position];
        this.items.forEach(function (menuItem) { menuItem.resetImage(); });
        this.updateSelection(position);
        var timeline = trackedTimeline({
            defaults: { ease: 'expo' },
            onComplete: function () {
                self.animating = false;
                var queued = self.pendingIndex;
                self.pendingIndex = -1;
                if (queued >= 0 && queued !== self.currentIndex) self.select(queued);
            }
        });
        timeline
            .to(previous.DOM.cards, {
                duration: 0.38,
                ease: 'power3.in',
                y: '101%',
                opacity: 0,
                stagger: 0.025
            }, 0)
            .add(function () {
                previous.gallery.stop();
                previous.DOM.el.classList.remove('is-current');
                previous.DOM.el.setAttribute('aria-hidden', 'true');
                previous.DOM.el.setAttribute('inert', '');
                gsap.set(previous.DOM.cards, { clearProps: 'transform,opacity' });
                incoming.DOM.el.classList.add('is-current');
                incoming.DOM.el.removeAttribute('inert');
                incoming.DOM.el.setAttribute('aria-hidden', 'false');
                gsap.set(incoming.DOM.cards, { y: '101%', opacity: 0 });
                self.currentIndex = position;
                incoming.gallery.open();
            }, 0.4)
            .to(incoming.DOM.cards, {
                duration: 0.8,
                y: '0%',
                opacity: 1,
                stagger: 0.04
            }, 0.42);
        var selectedMenuItem = this.items.find(function (item) {
            return item.DOM.el.dataset.target === incoming.DOM.el.id;
        });
        if (selectedMenuItem) timeline
            .to(selectedMenuItem.DOM.inner, {
                duration: 0.1,
                ease: 'quad.in',
                scaleY: 1.35,
                transformOrigin: '50% 100%'
            }, 0)
            .to(selectedMenuItem.DOM.inner, {
                duration: 0.55,
                scaleY: 1,
                ease: 'expo'
            }, 0.1);
    };

    var controller = new Controller();
    root.classList.add('is-enhanced');

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
            if (scope.active) controller.fitLayout();
        });
    }

    scope.listen(reduced, 'change', function () {
        if (reduced.matches) animations.forEach(function (animation) { animation.progress(1); });
    });
    scope.cleanup(function () {
        controller.items.forEach(function (item) { item.resetImage(); });
        controller.contents.forEach(function (content) { content.gallery.stop(); });
        animations.forEach(function (animation) { animation.kill(); });
        gsap.killTweensOf([root].concat(Array.from(root.querySelectorAll('*'))));
    });
}());
