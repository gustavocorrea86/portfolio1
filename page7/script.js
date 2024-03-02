const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')

btnMenu.addEventListener('click', ()=>{
    if(menuMobile.style.left == '-100%' ){
        menuMobile.style.left = '0%' 
    }else{
        menuMobile.style.left = '-100%' 
    }
})