const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconsBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconsBars.style.display='inline';
        iconClose.style.display='none';
    } else {
        menu.classList.add('tampil');
        iconsBars.style.display='none';
        iconClose.style.display='inline';
    }
}