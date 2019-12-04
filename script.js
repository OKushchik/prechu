const burgerMenu = document.querySelector('.header-burgerMenu');
const headerMenu = document.querySelector('.header-menu');
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



