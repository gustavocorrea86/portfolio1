const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')
const fundo = document.querySelector('main')
const carts = document.querySelector('.carts')
const descResum = document.querySelector('.descResum')

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('openMenu')
    // menuMobile.classList.toggle('hide')
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
        // fundo.style.opacity = '1'
    }else{
        menuMobile.style.left = '0%' 
        // fundo.style.opacity = '0.5'
    }
})
carts.addEventListener('click', ()=>{
    descResum.classList.toggle('hide')
})