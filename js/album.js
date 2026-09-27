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
    let activeTimeline, scrollFrame;
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
    function scrollIt(destination, duration, complete) {
        cancelAnimationFrame(scrollFrame);
        const start = scrollY;
        const target = root.getBoundingClientRect().top + scrollY - 52 + destination;
        const started = performance.now();
        function step(now) {
            if (!scope.active) return;
            const t = reduced.matches ? 1 : Math.min(1, (now - started) / duration);
            scrollTo({top: start + (target - start) * t * (2 - t), behavior: 'instant'});
            if (t < 1) scrollFrame = requestAnimationFrame(step); else complete();
        }
        scrollFrame = requestAnimationFrame(step);
    }
    scope.cleanup(() => {
        cancelAnimationFrame(scrollFrame);
        animations.forEach(animation => animation.kill());
        gsap.killTweensOf([root, ...root.querySelectorAll('*')]);
    });

class ContentPage {
    constructor(el) {
        this.DOM = {
            el: el
        };
        this.DOM.backCtrl = this.DOM.el.querySelector('.content__back');
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
        this.DOM.el.classList[this.isCurrent ? 'remove' : 'add']('menu__item--selected');
        this.isCurrent = !this.isCurrent;
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
        this.selectionQueue = [];
        this.wheelAccumulator = 0;
        // Current menu item index (starting with the first one).
        this.current = Math.max(0, this.menuItems.findIndex(item => item.DOM.el.dataset.folder === root.dataset.selected));
        // Highlight the current menu item
        this.menuItems[this.current].highlight();
        this.syncWheel(true);
        // Init/Bind events
        this.DOM.content.forEach(content => content.inert = true);
        this.initEvents();
        if (root.dataset.selected) {
            this.showContent(this.menuItems[this.current]);
            activeTimeline.progress(1);
        }
    }
    randomizePreviewLayout() {
        const rows = [6, 39, 72];
        const leftOffsets = [2, 9, 5];
        const rightOffsets = [83, 78, 81];
        this.DOM.galleries.forEach(gallery => {
            [...gallery.querySelectorAll('.bg-gallery__item')].forEach((item, index) => {
                const isLeft = index % 2 === 0;
                const row = Math.min(rows.length - 1, Math.floor(index / 2));
                const x = (isLeft ? leftOffsets[row] : rightOffsets[row]) + Math.random() * 2.5;
                const y = rows[row] + (Math.random() * 8 - 4);
                const scale = 0.9 + Math.random() * 0.28;
                item.style.setProperty('--album-preview-x', x.toFixed(2) + '%');
                item.style.setProperty('--album-preview-y', y.toFixed(2) + '%');
                item.style.setProperty('--album-preview-width', (13.2 * scale).toFixed(2) + 'vw');
                item.style.setProperty('--album-preview-mobile-width', (29 * scale).toFixed(2) + 'vw');
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
        const y = -this.current * this.wheelStep();
        if (immediate || reduced.matches) gsap.set(this.DOM.track, {y});
        else gsap.to(this.DOM.track, {y, duration: 0.28, ease: 'expo.inOut'});
    }
    select(pos, queued = false) {
        if (pos < 0 || pos >= this.menuItems.length || pos === this.current || this.isAnimating || this.isOpen) return false;
        if (!queued) this.selectionQueue.length = 0;
        const item = this.menuItems[pos];
        this.toggleMenuItems(item, this.current < pos ? 'up' : 'down');
        this.current = pos;
        return true;
    }
    queuedPosition() {
        return this.selectionQueue.reduce((position, direction) => position + direction, this.current);
    }
    queueStep(direction) {
        if (this.isOpen) return false;
        const next = this.queuedPosition() + direction;
        if (next < 0 || next >= this.menuItems.length) return false;
        this.selectionQueue.push(direction);
        this.drainSelectionQueue();
        return true;
    }
    queueSteps(direction, count) {
        for (let step = 0; step < count; step++) {
            if (!this.queueStep(direction)) break;
        }
    }
    drainSelectionQueue() {
        if (this.isAnimating || this.isOpen || !this.selectionQueue.length) return;
        const direction = this.selectionQueue.shift();
        if (!this.select(this.current + direction, true)) this.drainSelectionQueue();
    }
    initEvents() {
        for (const [pos, item] of this.menuItems.entries()) {
            
            // Click/Select a menu item
            scope.listen(item.DOM.el, 'click', ev => {
                ev.preventDefault();
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
            if (performance.now() < (this.suppressWheelUntil || 0)) return;
            const delta = ev.deltaMode === 1 ? ev.deltaY * 16 : ev.deltaMode === 2 ? ev.deltaY * winsize.height : ev.deltaY;
            if (Math.abs(delta) < 1) return;
            const direction = delta > 0 ? 1 : -1;
            if (this.wheelAccumulator && Math.sign(this.wheelAccumulator) !== direction) this.wheelAccumulator = 0;
            // A mouse-wheel notch usually reports roughly 100px. Smaller
            // touchpad deltas accumulate before becoming one adjacent step.
            if (Math.abs(delta) >= 60) {
                this.wheelAccumulator = 0;
                this.queueSteps(direction, Math.max(1, Math.round(Math.abs(delta) / 100)));
                return;
            }
            this.wheelAccumulator += delta;
            const steps = Math.floor(Math.abs(this.wheelAccumulator) / 60);
            if (!steps) return;
            this.wheelAccumulator -= direction * steps * 60;
            this.queueSteps(direction, steps);
        }, {passive: false});

        let touchStartY = null;
        scope.listen(this.DOM.wheel, 'touchstart', ev => {
            if (!this.isOpen && ev.touches.length === 1) touchStartY = ev.touches[0].clientY;
        }, {passive: true});
        scope.listen(this.DOM.wheel, 'touchend', ev => {
            if (touchStartY === null || this.isOpen) return;
            const distance = touchStartY - ev.changedTouches[0].clientY;
            touchStartY = null;
            if (Math.abs(distance) < 28) return;
            this.suppressWheelUntil = performance.now() + 800;
            this.queueSteps(distance > 0 ? 1 : -1, Math.max(1, Math.round(Math.abs(distance) / 70)));
        }, {passive: true});
    }
    // Click/Select a menu item
    // Animate all the bg images out and animate the new menu item's in
    toggleMenuItems(upcomingItem, direction = 'up') {
        this.isAnimating = true;
        const currentItem = this.menuItems[this.current];
        const upcomingIndex = this.menuItems.indexOf(upcomingItem);
        const dir = direction === 'up' ? 1 : -1;
        
        currentItem.toggleCurrent();
        upcomingItem.toggleCurrent();
        
        const selectionTimeline = timeline({
            defaults: {
                duration: 0.24,
                ease: 'expo.inOut'
            },
            onStart: () => this.isAnimating = true,
            onComplete: () => {
                this.isAnimating = false;
                this.drainSelectionQueue();
            }
        })
        .to(this.DOM.track, {
            y: -upcomingIndex * this.wheelStep(),
            duration: 0.19
        }, 0)
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
            stagger: dir*0.012
        }, 'upcomingImages');
    }
    // Hide the menu items and all other initial elements, and show the content for this menu item
    showContent(menuItem) {
        if (this.isAnimating || this.isOpen) return;
        this.isAnimating = true;
        this.isOpen = true;
        this.DOM.el.inert = true;
        menuItem.DOM.content.inert = false;
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

        // Scroll up first
        scrollIt(0, 300, () => {
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
