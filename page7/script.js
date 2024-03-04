const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')
const fundo = document.querySelector('main')
const carts = document.querySelector('.carts')
const resumCart = document.querySelector('.resumCart')

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('openMenu')
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
    }else{
        menuMobile.style.left = '0%' 
    }
})
carts.addEventListener('click', ()=>{
    if(resumCart.style.display =='block'){
        resumCart.style.display ='none'
    }else{
        resumCart.style.display ='block'
    }
    // resumCart.classList.toggle('hide')
})