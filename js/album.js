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
        gsap.to(this.DOM.galleryItems, {
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
        this.fitTitles();
        // Current menu item index (starting with the first one).
        this.current = Math.max(0, this.menuItems.findIndex(item => item.DOM.el.dataset.folder === root.dataset.selected));
        // Highlight the current menu item
        this.menuItems[this.current].highlight();
        // Init/Bind events
        this.DOM.content.forEach(content => content.inert = true);
        this.initEvents();
        if (root.dataset.selected) {
            this.showContent(this.menuItems[this.current]);
            activeTimeline.progress(1);
        }
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
    initEvents() {
        for (const [pos, item] of this.menuItems.entries()) {
            
            // Click/Select a menu item
            scope.listen(item.DOM.el, 'click', ev => {
                ev.preventDefault();
                if ( pos === this.current || this.isAnimating || this.isOpen ) return;
                
                const direction = this.current < pos ? 'up' : 'down';

                this.toggleMenuItems(item, direction);

                // Update current value
                this.current = pos;
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
    }
    // Click/Select a menu item
    // Animate all the bg images out and animate the new menu item's in
    toggleMenuItems(upcomingItem, direction = 'up') {
        this.isAnimating = true;
        const currentItem = this.menuItems[this.current];
        const dir = direction === 'up' ? 1 : -1;
        
        currentItem.toggleCurrent();
        upcomingItem.toggleCurrent();
        
        timeline({
            defaults: {
                duration: 1, 
                ease: 'expo.inOut'
            },
            onStart: () => this.isAnimating = true,
            onComplete: () => this.isAnimating = false
        })
        .to(upcomingItem.DOM.title, {
            ease: 'expo.in',
            duration: 0.5,
            y: dir*-100+'%',
        }, 0)
        .to(upcomingItem.DOM.title, {
            ease: 'expo',
            duration: 0.8,
            startAt: {y: dir*100+'%'},
            y: '0%'
        }, 0.5)
        .to(currentItem.DOM.deco, {
            scaleY: 0,
            opacity: 0
        }, 0)
        .to(currentItem.DOM.cta, {
            y: '100%',
            opacity: 0
        }, 0)
        .to(currentItem.DOM.galleryItems, {
            y: dir*-winsize.height*1.2,
            stagger: dir*0.05,
            rotation: gsap.utils.random(-30,30)
        }, 0)
        .addLabel('upcomingImages', 0.1)
        .to(upcomingItem.DOM.deco, {
            startAt: {scaleY: 0},
            scaleY: 1,
            opacity: 1
        }, 'upcomingImages')
        .to(upcomingItem.DOM.cta, {
            startAt: {y: dir*100+'%'},
            y: '0%',
            opacity: 1
        }, 'upcomingImages')
        .to(upcomingItem.DOM.galleryItems, {
            startAt: {y: dir*winsize.height*1.2, rotation: gsap.utils.random(-30,30)},
            y: 0,
            opacity: 1,
            rotation: 0,
            stagger: dir*0.05
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
        const timelineDefaults = {
            duration: 0.8, 
            ease: 'expo.inOut'
        };

        timeline({
            defaults: timelineDefaults,
            onStart: () => this.isAnimating = true,
            onComplete: () => {
                this.isAnimating = false;
                menuItem.contentPage.DOM.backCtrl.focus({preventScroll: true});
            }
        })
        .to(menuItem.DOM.deco, {scaleY: 0})
        .to(menuItem.DOM.ctaInner, {y: '100%'}, 0)
        .to(menuItem.DOM.galleryItems, {
            y: -winsize.height*1.2,
            opacity: 0,
            stagger: 0.05,
            rotation: gsap.utils.random(-30,30)
        }, 0)
        .to(this.menuItems.map(item => item.DOM.title), {
            y: '100%',
            stagger: {each: 0.03, from: 'end'}
        }, 0)
        .to(this.DOM.headline.deco, {scaleX: 0}, 0)
        .to(this.DOM.headline.text, {y: '100%'}, 0)
        .addLabel('showPageContent', timelineDefaults.duration*.1)
        .to(menuItem.contentPage.DOM.backCtrl, {
            startAt: {x: '50%'},
            x: '0%',
            opacity: 1
        }, 'showPageContent')
        .to([menuItem.contentPage.DOM.titleInner, menuItem.contentPage.DOM.introInner, menuItem.contentPage.DOM.dateInner], {
            startAt: {y: '-100%'},
            onStart: () => {
                gsap.set([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], {
                    opacity: 1, 
                    stagger: -0.06
                })
            },
            y: '0%',
            stagger: -0.06
        }, 'showPageContent')
        .to(menuItem.contentPage.DOM.galleryItems, {
            startAt: {y: '100%', rotation: () => gsap.utils.random(-20,20)},
            y: '0%',
            rotation: 0,
            opacity: 1,
            stagger: 0.08
        }, 'showPageContent')
        .to(root, {backgroundColor: menuItem.contentPage.bgcolor}, 0);

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
            timeline({
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
                    root.classList.remove('is-open');
                    menuItem.DOM.el.focus({preventScroll: true});
                }
            })
            .to(root, {backgroundColor: '#fff'}, 0)
            .to(menuItem.contentPage.DOM.galleryItems, {
                y: '100%',
                rotation: () => gsap.utils.random(-20,20),
                opacity: 0,
                stagger: 0.08
            }, 0)
            .to([menuItem.contentPage.DOM.titleInner, menuItem.contentPage.DOM.introInner, menuItem.contentPage.DOM.dateInner], {
                onComplete: () => {
                    gsap.set([menuItem.contentPage.DOM.title, menuItem.contentPage.DOM.intro, menuItem.contentPage.DOM.date], {
                        opacity: 0
                    })
                },
                y: '-100%',
                stagger: 0.06
            }, 0)
            .to(menuItem.contentPage.DOM.backCtrl, {
                x: '50%',
                opacity: 0
            }, 0)
            .addLabel('showMenuItems', timelineDefaults.duration*.1)
            .to(this.DOM.headline.text, {y: '0%'}, 'showMenuItems')
            .to(this.DOM.headline.deco, {scaleX: 1}, 'showMenuItems')
            .set(this.menuItems.map(item => item.DOM.title), {
                y: '0%',
            }, 'showMenuItems')
            .to(menuItem.DOM.galleryItems, {
                startAt: {rotation: gsap.utils.random(-30,30)},
                y: 0,
                stagger: -0.05,
                rotation: 0,
                opacity: 1
            }, 'showMenuItems')
            .to(menuItem.DOM.ctaInner, {y: '0%'}, 'showMenuItems')
            .to(menuItem.DOM.deco, {scaleY: 1}, 'showMenuItems')
        });
    }
}
    const menu = root.querySelector('.menu');
    if (!menu.querySelector('.menu__item')) return;
    root.classList.add('is-enhanced');
    const controller = new MenuController(menu);
    const revealItems = () => controller.menuItems.forEach(item => item.DOM.el.classList.add('menu__item--visible'));
    if ('IntersectionObserver' in window && !reduced.matches && !root.dataset.selected) {
        const titleObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('menu__item--visible');
                titleObserver.unobserve(entry.target);
            });
        }, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});
        controller.menuItems.forEach(item => titleObserver.observe(item.DOM.el));
        scope.cleanup(() => titleObserver.disconnect());
    }
    else revealItems();
    scope.listen(window, 'resize', () => {
        winsize = calcWinsize();
        controller.fitTitles();
    });
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => { if (scope.active) controller.fitTitles(); });
    }
    scope.listen(menu, 'keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const link = event.target.closest('.menu__item');
        if (!link || controller.isAnimating || controller.isOpen) return;
        event.preventDefault();
        const index = controller.menuItems.findIndex(item => item.DOM.el === link);
        if (index === controller.current) controller.showContent(controller.menuItems[index]);
        else link.click();
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
