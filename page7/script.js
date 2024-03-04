const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')
const fundo = document.querySelector('main')
const carts = document.querySelector('.carts')
const resumCart = document.querySelector('.resumCart')
const btnAddAndCart = document.querySelector('.btnAddAndCart')
const back = document.querySelector('.back')
const sub = document.querySelector('.sub')
const qtd = document.querySelector('.qtd')
let qtdAdd = 0
const add = document.querySelector('.add')
const shop = document.querySelector('.shop')
const shopQtd = document.querySelector('.shopQtd')
let cartQtd = 0

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('openMenu')
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
    }else{
        menuMobile.style.left = '0%' 
        menuMobile.style.zIndex = '1'
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

add.addEventListener('click', ()=>{
    qtdAdd += 1
    cartQtd +=1
    shop.style.display = 'flex'
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
})

sub.addEventListener('click',()=>{
    if(qtdAdd > 0 && cartQtd > 0){
        qtdAdd -= 1
        cartQtd -=1
    }
    if(qtdAdd == 0){
        shop.style.display = 'none'
    }
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
})