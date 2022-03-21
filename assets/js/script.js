const menuToogle = document.querySelector('.hamburguer');
const menu = document.querySelector('.navList');

menuToogle.addEventListener('click', () =>{
    menuToogle.classList.toggle('active')
    menu.classList.toggle('active')
})

document.querySelectorAll('.navList li')
.forEach((item) => item.addEventListener('click', () =>{
    menuToogle.classList.remove('active')
    menu.classList.remove('active')
})) 


addEventListener("scroll", () =>{
    const header = document.querySelector("header")
    const posY = window.scrollY;
    posY > 10? header.style.backgroundColor = "#141414" : header.style.backgroundColor = "transparent";
})