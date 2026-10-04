/* MenuFullGrid by Codrops, MIT (licenses/menu-full-grid.txt).
 * Original selection / open / back GSAP timelines; scoped to Hexo's page lifecycle.
 * Native cursor only. All album content is already present in this document.
 */
(function () {
    'use strict';
    const root = document.querySelector('.album-grid');
    if (!root || !window.gsap || !window.MinosPage) return;
    const scope = window.MinosPage.scope;
    const gsap = window.gsap;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    let activeTimeline;
    function timeline(options) {
        const complete = options.onComplete;
        const animation = gsap.timeline(Object.assign({}, options, {
            onComplete: () => { animations.delete(animation); if (complete) complete(); }
        }));
        if (reduced.matches) animation.timeScale(1000000);
        animations.add(animation);
        activeTimeline = animation;
        return animation;
    }
    function calcWinsize() { return {width: innerWidth, height: innerHeight}; }
    function resetScroll(destination, complete) {
        const target = root.getBoundingClientRect().top + scrollY - 52 + destination;
        scrollTo({top: target, behavior: 'instant'});
        complete();
    }
    scope.cleanup(() => {
        animations.forEach(animation => animation.kill());
        gsap.killTweensOf([root, ...root.querySelectorAll('*')]);
    });

class ContentPage {
    constructor(el) {
        this.DOM = {
            el: el
        };
        this.DOM.backCtrl = this.DOM.el.querySelector('.content__back');
        this.DOM.info = this.DOM.el.querySelector('.content__info');
        this.DOM.title = this.DOM.el.querySelector('.content__title');
        this.DOM.titleInner = this.DOM.title.querySelector('span');
        this.DOM.intro = this.DOM.el.querySelector('.content__intro');
        this.DOM.introInner = this.DOM.intro.querySelector('span');
        this.DOM.date = this.DOM.el.querySelector('.content__date');
        this.DOM.dateInner = this.DOM.date.querySelector('span');
        this.DOM.gallery = this.DOM.el.querySelector('.gallery');
        this.DOM.galleryItems = this.DOM.gallery.querySelectorAll('.gallery__figure');
        this.bgcolor = this.DOM.el.dataset.bgcolor;
    }
}

class MenuItem {
    constructor(el, galleryEl, contentEl) {
        this.DOM = {
            el: el,
            gallery: galleryEl,
            content: contentEl
        };
        this.DOM.title = this.DOM.el.querySelector('.menu__item-title');
        this.DOM.deco = this.DOM.el.querySelector('.menu__item-deco');
        this.DOM.cta = this.DOM.el.querySelector('.menu__item-cta');
        this.DOM.ctaInner = this.DOM.cta.querySelector('span');
        this.DOM.galleryItems = [...this.DOM.gallery.querySelectorAll('.bg-gallery__item')];
        
        this.contentPage = new ContentPage(this.DOM.content);
        
        this.isCurrent = false;
    }
    highlight() {
        this.toggleCurrent();

        gsap.set([this.DOM.deco, this.DOM.cta], {opacity: 1});
        if (this.DOM.galleryItems.length) gsap.to(this.DOM.galleryItems, {
            duration: reduced.matches ? 0 : 1, 
            ease: 'expo',
            startAt: {scale: 0.01, rotation: gsap.utils.random(-20,20)},
            scale: 1,
            opacity: +this.isCurrent,
            rotation: 0,
            stagger: 0.05
        });
    }
    toggleCurrent() {
        this.setCurrent(!this.isCurrent);
    }
    setCurrent(value) {
        this.DOM.el.classList.toggle('menu__item--selected', value);
        this.isCurrent = value;
    }
}

// Calculate the viewport size
let winsize = calcWinsize();

class MenuController {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.wheel = this.DOM.el.querySelector('.menu__wheel');
        this.DOM.track = this.DOM.el.querySelector('.menu__track');
        // Set of small images each selected menu item has on the background
        this.DOM.galleries = [...root.querySelectorAll('.bg-gallery-wrap > .bg-gallery')];
        // Content DOM
        this.DOM.pagePreview = root.querySelector('.page--preview');
        this.DOM.content = [...this.DOM.pagePreview.querySelectorAll('.content')];
        // "Choose a project" element (line + text)
        this.DOM.headline = {
            deco: this.DOM.el.querySelector('.menu__headline > .menu__headline-deco'),
            text: this.DOM.el.querySelector('.menu__headline > .menu__headline-text > span')
        };
        // array of all MenuItems
        this.menuItems = [];
        [...this.DOM.el.querySelectorAll('.menu__item')].forEach((item, pos) => {
            this.menuItems.push(new MenuItem(item, this.DOM.galleries[pos], this.DOM.content[pos]));
        });
        
        this.init();
    }
    init() {
        this.randomizePreviewLayout();
        this.fitTitles();
        // Current menu item index (starting with the first one).
        this.current = Math.max(0, this.menuItems.findIndex(item => item.DOM.el.dataset.folder === root.dataset.selected));
        this.playhead = {position: this.current};
        this.targetPosition = this.current;
        this.snapTimer = 0;
        this.suppressClickUntil = 0;
        // As in the referenced carousel, all wheel, click and drag input updates
        // one reusable playhead tween. Input never creates an animation queue.
        this.scrub = gsap.to(this.playhead, {
            position: this.current,
            duration: 0.42,
            ease: 'power3.out',
            paused: true,
            onUpdate: () => this.renderWheel()
        });
        scope.cleanup(() => {
            clearTimeout(this.snapTimer);
            this.scrub.kill();
            if (this.selectionTimeline) {
                animations.delete(this.selectionTimeline);
                this.selectionTimeline.kill();
            }
        });
        // Highlight the current menu item
        this.menuItems[this.current].highlight();
        this.renderWheel();
        // Init/Bind events
        this.DOM.content.forEach(content => content.inert = true);
        this.initEvents();
        if (root.dataset.selected) {
            this.showContent(this.menuItems[this.current]);
            activeTimeline.progress(1);
        }
    }
    randomizePreviewLayout() {
        this.DOM.galleries.forEach(gallery => {
            [...gallery.querySelectorAll('.bg-gallery__item')].forEach(item => {
                const scale = 0.9 + Math.random() * 0.28;
                item.dataset.previewScale = scale.toFixed(4);
                item.dataset.previewX = Math.random().toFixed(4);
                item.style.setProperty('--album-preview-mobile-width', (29 * scale).toFixed(2) + 'vw');
                if (!item.complete) scope.listen(item, 'load', () => this.layoutPreviewImages());
            });
        });
        this.layoutPreviewImages();
    }
    layoutPreviewImages() {
        if (winsize.width < 848) return;
        this.DOM.galleries.forEach(gallery => {
            const items = [...gallery.querySelectorAll('.bg-gallery__item')];
            const width = gallery.clientWidth;
            const height = gallery.clientHeight;
            if (!width || !height) return;

            const safeX = Math.max(12, width * 0.018);
            const safeY = Math.max(12, height * 0.025);
            const minimumGap = Math.max(12, height * 0.025);
            const sideWidth = Math.max(1, width * 0.28 - safeX * 2);
            const availableHeight = Math.max(1, height - safeY * 2);

            [items.filter((_, index) => index % 2 === 0), items.filter((_, index) => index % 2 === 1)]
                .forEach((column, side) => {
                    const sizes = column.map(item => {
                        const scale = Number(item.dataset.previewScale) || 1;
                        const sourceWidth = Number(item.getAttribute('width')) || item.naturalWidth || 1;
                        const sourceHeight = Number(item.getAttribute('height')) || item.naturalHeight || 1;
                        const ratio = sourceWidth / sourceHeight;
                        let itemWidth = Math.min(winsize.width * 0.132 * scale, 288, sideWidth);
                        let itemHeight = itemWidth / ratio;
                        const maxHeight = winsize.height * 0.22;
                        if (itemHeight > maxHeight) {
                            itemHeight = maxHeight;
                            itemWidth = itemHeight * ratio;
                        }
                        return {item, width: itemWidth, height: itemHeight};
                    });
                    const gaps = Math.max(0, sizes.length - 1);
                    const totalHeight = sizes.reduce((sum, size) => sum + size.height, 0);
                    const fit = totalHeight + minimumGap * gaps > availableHeight
                        ? Math.max(0.1, (availableHeight - minimumGap * gaps) / totalHeight)
                        : 1;
                    sizes.forEach(size => {
                        size.width *= fit;
                        size.height *= fit;
                    });
                    const fittedHeight = sizes.reduce((sum, size) => sum + size.height, 0);
                    const gap = gaps ? Math.max(0, (availableHeight - fittedHeight) / gaps) : 0;
                    let y = sizes.length === 1 ? safeY + (availableHeight - fittedHeight) / 2 : safeY;
                    sizes.forEach(size => {
                        const freeX = Math.max(0, sideWidth - size.width);
                        const offset = (Number(size.item.dataset.previewX) || 0) * freeX;
                        const x = side === 0
                            ? safeX + offset
                            : width - safeX - size.width - offset;
                        size.item.style.setProperty('--album-preview-width', size.width.toFixed(2) + 'px');
                        size.item.style.setProperty('--album-preview-x', x.toFixed(2) + 'px');
                        size.item.style.setProperty('--album-preview-y', y.toFixed(2) + 'px');
                        y += size.height + gap;
                    });
                });
        });
    }
    fitTitles() {
        const available = this.DOM.el.clientWidth;
        const minimum = Math.min(28, parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.75);
        this.menuItems.forEach(item => {
            const el = item.DOM.el;
            el.style.removeProperty('--album-item-title-size');
            const preferred = parseFloat(getComputedStyle(item.DOM.title).fontSize);
            if (el.scrollWidth <= available) return;
            let low = Math.min(minimum, preferred);
            let high = preferred;
            for (let step = 0; step < 9; step++) {
                const size = (low + high) / 2;
                el.style.setProperty('--album-item-title-size', size + 'px');
                if (el.scrollWidth <= available) low = size;
                else high = size;
            }
            el.style.setProperty('--album-item-title-size', low + 'px');
        });
    }
    wheelStep() {
        return this.menuItems[0] ? this.menuItems[0].DOM.el.getBoundingClientRect().height : 0;
    }
    syncWheel(immediate = false) {
        if (immediate) {
            this.targetPosition = this.current;
            this.playhead.position = this.current;
            this.scrub.pause();
        }
        this.renderWheel();
    }
    clampPosition(position) {
        return Math.max(0, Math.min(this.menuItems.length - 1, position));
    }
    renderWheel() {
        const position = this.clampPosition(this.playhead.position);
        gsap.set(this.DOM.track, {y: -position * this.wheelStep()});
        const nearest = Math.round(position);
        if (nearest !== this.current) this.activateItem(nearest, nearest > this.current ? 'up' : 'down');
    }
    scrubTo(position, duration = 0.42) {
        if (this.isOpen) return false;
        const next = this.clampPosition(position);
        this.targetPosition = next;
        if (reduced.matches) {
            this.playhead.position = next;
            this.renderWheel();
            return true;
        }
        this.scrub.vars.position = next;
        this.scrub.duration(duration).invalidate().restart();
        return true;
    }
    scheduleSnap(delay = 120) {
        clearTimeout(this.snapTimer);
        this.snapTimer = setTimeout(() => this.snapToNearest(), delay);
    }
    snapToNearest() {
        clearTimeout(this.snapTimer);
        this.snapTimer = 0;
        this.scrubTo(Math.round(this.targetPosition), 0.28);
    }
    select(pos) {
        if (pos < 0 || pos >= this.menuItems.length || this.isAnimating || this.isOpen) return false;
        clearTimeout(this.snapTimer);
        const distance = Math.abs(pos - this.playhead.position);
        return this.scrubTo(pos, Math.min(0.72, 0.3 + distance * 0.09));
    }
    initEvents() {
        for (const [pos, item] of this.menuItems.entries()) {
            
            // Click/Select a menu item
            scope.listen(item.DOM.el, 'click', ev => {
                ev.preventDefault();
                if (performance.now() < this.suppressClickUntil) return;
                this.select(pos);
            });

            // click on the menu item's explore 
            scope.listen(item.DOM.cta, 'click', ev => {
                ev.preventDefault(); ev.stopPropagation();
                if ( this.isAnimating || this.isOpen ) return;
                this.showContent(item);
            });

            // Click on the back control when at the page preview
            scope.listen(item.contentPage.DOM.backCtrl, 'click', ev => {
                ev.preventDefault();
                if ( this.isAnimating || !this.isOpen ) return;
                
                this.showMenu(item);
            });

        }

        scope.listen(root, 'wheel', ev => {
            if (this.isOpen) return;
            ev.preventDefault();
            const delta = ev.deltaMode === 1 ? ev.deltaY * 16 : ev.deltaMode === 2 ? ev.deltaY * winsize.height : ev.deltaY;
            if (Math.abs(delta) < 0.25) return;
            // Roughly one conventional wheel notch advances one title. Trackpad
            // deltas remain continuous and accumulate naturally in the playhead.
            this.scrubTo(this.targetPosition + delta / 110, 0.38);
            this.scheduleSnap();
        }, {passive: false});

        let drag = null;
        scope.listen(this.DOM.wheel, 'pointerdown', ev => {
            if (this.isOpen || ev.button !== 0) return;
            drag = {id: ev.pointerId, y: ev.clientY, position: this.targetPosition, moved: false};
        });
        scope.listen(this.DOM.wheel, 'pointermove', ev => {
            if (!drag || drag.id !== ev.pointerId || this.isOpen) return;
            const distance = drag.y - ev.clientY;
            if (!drag.moved && Math.abs(distance) > 5) {
                drag.moved = true;
                this.DOM.wheel.setPointerCapture(ev.pointerId);
            }
            if (!drag.moved) return;
            ev.preventDefault();
            this.scrubTo(drag.position + distance / this.wheelStep(), 0.16);
        });
        const finishDrag = ev => {
            if (!drag || drag.id !== ev.pointerId) return;
            if (drag.moved) {
                this.suppressClickUntil = performance.now() + 250;
                this.snapToNearest();
            }
            drag = null;
        };
        scope.listen(this.DOM.wheel, 'pointerup', finishDrag);
        scope.listen(this.DOM.wheel, 'pointercancel', finishDrag);
    }
    // Click/Select a menu item
    // Animate all the bg images out and animate the new menu item's in
    toggleMenuItems(upcomingItem, direction = 'up') {
        const currentItem = this.menuItems[this.current];
        const dir = direction === 'up' ? 1 : -1;
        currentItem.setCurrent(false);
        upcomingItem.setCurrent(true);

        if (this.selectionTimeline) {
            animations.delete(this.selectionTimeline);
            this.selectionTimeline.kill();
        }
        const inactiveItems = this.menuItems.filter(item => item !== currentItem && item !== upcomingItem);
        const animated = this.menuItems.flatMap(item => [
            item.DOM.deco, item.DOM.cta, ...item.DOM.galleryItems
        ]);
        gsap.killTweensOf(animated);
        // A quick wheel/drag can interrupt the previous selection timeline.
        // Normalize every older item so no half-finished preview survives behind
        // the current pair; a future incoming item receives a fresh startAt.
        inactiveItems.forEach(item => {
            gsap.set(item.DOM.deco, {scaleY: 0, opacity: 0});
            gsap.set(item.DOM.cta, {y: '100%', opacity: 0});
            if (item.DOM.galleryItems.length) {
                gsap.set(item.DOM.galleryItems, {y: 0, rotation: 0, opacity: 0});
            }
        });
        let selectionTimeline;
        selectionTimeline = timeline({
            defaults: {
                duration: 0.3,
                ease: 'expo.inOut'
            },
            onComplete: () => {
                if (this.selectionTimeline === selectionTimeline) this.selectionTimeline = null;
            }
        })
        .to(currentItem.DOM.deco, {
            scaleY: 0,
            opacity: 0
        }, 0)
        .to(currentItem.DOM.cta, {
            y: '100%',
            opacity: 0
        }, 0);
        if (currentItem.DOM.galleryItems.length) selectionTimeline.to(currentItem.DOM.galleryItems, {
            y: dir*-winsize.height*1.2,
            opacity: 0,
            stagger: dir*0.012,
            rotation: gsap.utils.random(-30,30)
        }, 0);
        selectionTimeline.addLabel('upcomingImages', 0.033)
        .to(upcomingItem.DOM.deco, {
            startAt: {scaleY: 0},
            scaleY: 1,
            opacity: 1
        }, 'upcomingImages')
        .to(upcomingItem.DOM.cta, {
            startAt: {y: dir*100+'%'},
            y: '0%',
            opacity: 1
        }, 'upcomingImages');
        if (upcomingItem.DOM.galleryItems.length) selectionTimeline.to(upcomingItem.DOM.galleryItems, {
            startAt: {y: dir*winsize.height*1.2, rotation: gsap.utils.random(-30,30)},
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            stagger: dir*0.012
        }, 'upcomingImages');
        this.selectionTimeline = selectionTimeline;
    }
    activateItem(pos, direction) {
        if (pos < 0 || pos >= this.menuItems.length || pos === this.current) return;
        this.toggleMenuItems(this.menuItems[pos], direction);
        this.current = pos;
    }
    // Hide the menu items and all other initial elements, and show the content for this menu item
    showContent(menuItem) {
        if (this.isAnimating || this.isOpen) return;
        this.isAnimating = true;
        this.isOpen = true;
        this.DOM.el.inert = true;
        menuItem.DOM.content.inert = false;
        menuItem.contentPage.DOM.gallery.scrollTop = 0;
        menuItem.contentPage.DOM.info.scrollTop = 0;
        menuItem.DOM.el.setAttribute('aria-expanded', 'true');
        root.classList.add('is-open');
        gsap.killTweensOf(menuItem.DOM.galleryItems);
        gsap.set([
            menuItem.contentPage.DOM.titleInner,
            menuItem.contentPage.DOM.introInner,
            menuItem.contentPage.DOM.dateInner
        ], {y: '0%'});
        const timelineDefaults = {
            duration: 0.8, 
            ease: 'expo.inOut'
        };

        const contentTimeline = timeline({
            defaults: timelineDefaults,
            onStart: () => this.isAnimating = true,
            onComplete: () => {
                this.isAnimating = false;
                menuItem.contentPage.DOM.backCtrl.focus({preventScroll: true});
            }
        })
        .to(this.DOM.el, {
            opacity: 0,
            duration: 0.18,
            ease: 'none'
        }, 0)
        .to(menuItem.DOM.deco, {scaleY: 0})
        .to(menuItem.DOM.ctaInner, {y: '100%'}, 0);
        if (menuItem.DOM.galleryItems.length) contentTimeline.to(menuItem.DOM.galleryItems, {
            y: -winsize.height*1.2,
            opacity: 0,
            stagger: 0.05,
            rotation: gsap.utils.random(-30,30)
        }, 0);
        contentTimeline.to(this.DOM.headline.deco, {scaleX: 0}, 0)
        .addLabel('showPageContent', timelineDefaults.duration*.1)
        .to(menuItem.contentPage.DOM.backCtrl, {
            startAt: {x: '50%'},
            x: '0%',
            opacity: 1
        }, 'showPageContent')
        .to([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], {
            opacity: 1,
            duration: 0.18,
            ease: 'none'
        }, 'showPageContent');
        if (menuItem.contentPage.DOM.galleryItems.length) contentTimeline.to(menuItem.contentPage.DOM.galleryItems, {
            startAt: {y: '100%', rotation: () => gsap.utils.random(-20,20)},
            y: '0%',
            rotation: 0,
            opacity: 1,
            stagger: 0.08
        }, 'showPageContent');
        contentTimeline.to(root, {backgroundColor: menuItem.contentPage.bgcolor}, 0);

        this.DOM.pagePreview.classList.remove('page--preview');
        menuItem.DOM.content.classList.add('content--current');
    }
    // Show back the menu
    showMenu(menuItem) {
        if (this.isAnimating || !this.isOpen) return;
        this.isAnimating = true;
        const timelineDefaults = {
            duration: 0.8, 
            ease: 'expo.inOut'
        };

        // Reset the document and menu geometry in the same frame so returning
        // from a long gallery never exposes a separate scroll-to-top motion.
        resetScroll(0, () => {
            // Restore the one-screen menu geometry before revealing it. Keeping
            // the detail-page height until the end places the menu far below the
            // viewport and makes its title jump upward on the final frame.
            gsap.set(this.menuItems.map(item => item.DOM.title), {y: '0%'});
            gsap.set(this.DOM.headline.text, {y: '0%'});
            gsap.set(this.DOM.headline.deco, {scaleX: 1});
            gsap.set([
                menuItem.contentPage.DOM.titleInner,
                menuItem.contentPage.DOM.introInner,
                menuItem.contentPage.DOM.dateInner
            ], {y: '0%'});
            gsap.set(this.DOM.el, {opacity: 0});
            root.classList.remove('is-open');

            const menuTimeline = timeline({
                defaults: timelineDefaults,
                onStart: () => this.isAnimating = true,
                onComplete: () => {
                    this.DOM.pagePreview.classList.add('page--preview');
                    menuItem.DOM.content.classList.remove('content--current');
                    this.isAnimating = false;
                    this.isOpen = false;
                    this.DOM.el.inert = false;
                    menuItem.DOM.content.inert = true;
                    menuItem.DOM.el.setAttribute('aria-expanded', 'false');
                    gsap.set(this.DOM.el, {opacity: 1});
                    menuItem.DOM.el.focus({preventScroll: true});
                }
            })
            .to(root, {backgroundColor: '#fff'}, 0);
            if (menuItem.contentPage.DOM.galleryItems.length) menuTimeline.to(menuItem.contentPage.DOM.galleryItems, {
                y: '100%',
                rotation: () => gsap.utils.random(-20,20),
                opacity: 0,
                stagger: 0.08
            }, 0);
            menuTimeline.to([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], {
                opacity: 0,
                duration: 0.18,
                ease: 'none'
            }, 0)
            .to(menuItem.contentPage.DOM.backCtrl, {
                x: '50%',
                opacity: 0
            }, 0)
            .addLabel('showMenuItems', timelineDefaults.duration)
            .to(this.DOM.el, {
                opacity: 1,
                duration: 0.18,
                ease: 'none'
            }, 'showMenuItems');
            if (menuItem.DOM.galleryItems.length) menuTimeline.to(menuItem.DOM.galleryItems, {
                startAt: {rotation: gsap.utils.random(-30,30)},
                y: 0,
                stagger: -0.05,
                rotation: 0,
                opacity: 1
            }, 'showMenuItems');
            menuTimeline.to(menuItem.DOM.ctaInner, {y: '0%'}, 'showMenuItems')
            .to(menuItem.DOM.deco, {scaleY: 1}, 'showMenuItems')
        });
    }
}
    const menu = root.querySelector('.menu');
    if (!menu.querySelector('.menu__item')) return;
    root.classList.add('is-enhanced');
    const controller = new MenuController(menu);
    scope.listen(window, 'resize', () => {
        winsize = calcWinsize();
        controller.layoutPreviewImages();
        controller.fitTitles();
        controller.syncWheel(true);
    });
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (!scope.active) return;
            controller.fitTitles();
            controller.syncWheel(true);
        });
    }
    scope.listen(menu, 'keydown', event => {
        const link = event.target.closest('.menu__item');
        if (!link || controller.isOpen) return;
        const index = controller.menuItems.findIndex(item => item.DOM.el === link);
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const next = controller.current + (event.key === 'ArrowDown' ? 1 : -1);
            if (controller.select(next)) controller.menuItems[next].DOM.el.focus({preventScroll: true});
            return;
        }
        if ((event.key === 'Enter' || event.key === ' ') && !controller.isAnimating) {
            event.preventDefault();
            if (index === controller.current) controller.showContent(controller.menuItems[index]);
            else controller.select(index);
        }
    });
    scope.listen(root, 'keydown', event => {
        if (event.key === 'Escape' && controller.isOpen && !controller.isAnimating) {
            event.preventDefault(); controller.showMenu(controller.menuItems[controller.current]);
        }
    });
    scope.listen(reduced, 'change', () => {
        if (reduced.matches) animations.forEach(animation => animation.progress(1));
    });
})();
