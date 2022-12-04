'use strict';

let menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
let menu = document.querySelector('.mobile-nav');
let state = false;

menuIcon.addEventListener('click', () => {
    if (!state) {
        menuIcon.name = 'close-outline';
        menu.style.right = '0';
    } else {
        menuIcon.name = 'menu-outline';
        menu.style.right = '-85%';
    }
    state = !state;
});
