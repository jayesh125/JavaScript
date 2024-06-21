let container = document.querySelector('.container');
let menu = document.querySelector('.sidebar-btn');
let closeMenu = document.querySelector('.sidebar-btn-close');

menu.addEventListener("click", ()=>{
    container.style.width = '50vh';
});

closeMenu.addEventListener('click',()=>{
    container.style.width = '0vh';
});