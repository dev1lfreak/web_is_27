class NavigationToggler {
    constructor() {
        this.triggerElement = document.querySelector('.burger');
        this.targetElement = document.querySelector('.nav');
        this.pageContainer = document.body;
        this.currentState = false;

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        if (!this.triggerElement || !this.targetElement) return;

        this.triggerElement.addEventListener('click', () => this.switchNavigationState());

        const navigationItems = this.targetElement.querySelectorAll('.nav__link');
        navigationItems.forEach(item => {
            item.addEventListener('click', () => this.hideNavigation());
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 767 && this.currentState) {
                this.hideNavigation();
            }
        });
    }

    switchNavigationState() {
        this.currentState ? this.hideNavigation() : this.showNavigation();
    }

    showNavigation() {
        this.targetElement.classList.add('nav--active');
        this.triggerElement.classList.add('burger--active');
        this.pageContainer.classList.add('menu-open');
        this.currentState = true;
    }

    hideNavigation() {
        this.targetElement.classList.remove('nav--active');
        this.triggerElement.classList.remove('burger--active');
        this.pageContainer.classList.remove('menu-open');
        this.currentState = false;
    }
}

const initializeNavigation = () => {
    new NavigationToggler();
};

const whenReady = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
};

whenReady(initializeNavigation);