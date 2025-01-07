//Header menu
const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const menuMobile = menu.querySelector('.menu__mobile')

function openMenu(){
    menu.classList.add('open');
    document.body.classList.add('_lock');
}

function closeMenu(){
    menu.classList.remove('open');
    document.body.classList.remove('_lock');
}

//Header menu

if(menuMobile){
    menuMobile.addEventListener("click", function(e){
        if(menu.classList.contains("open")){
            closeMenu()
        } else{
            openMenu()
        }
    });
}

const menuWrapper = menu.querySelector('.menu__wrapper');
const menuLink = menuWrapper.querySelectorAll('.menu__link');

menuLink.forEach((link)=>{
    link.addEventListener('click', ()=>{
        closeMenu();
    });
});