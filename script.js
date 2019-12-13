
const burgerMenu = document.querySelector('.headerWrap__burgerMenu');
const headerMenu = document.querySelector('.headerWrap__menu');
let menuOpen = false;

burgerMenu.onclick = function (){
    menuOpen = !menuOpen;
    if ( menuOpen ) {
        headerMenu.classList.add("header-menuBurger");
    } else {
        headerMenu.classList.remove("header-menuBurger");
    }
};

// burgerMenu.onclick = function (){
//     menuOpen = !menuOpen;
//     if ( menuOpen ) {
//         menuBurger.style.display = 'block';
//     } else {
//         menuBurger.style.display = 'none';
//     }
// };



