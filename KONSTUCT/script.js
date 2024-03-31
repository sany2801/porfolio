const menumobile = document.querySelector('.buttonGamburger')
const mobile__menu = document.querySelector('.mobile__menu')
menumobile.addEventListener('click',()=>{
    mobile__menu.classList.toggle('active')
    menumobile.classList.toggle('openMenu')

})