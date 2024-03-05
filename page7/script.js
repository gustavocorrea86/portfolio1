const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')
const fundo = document.querySelector('main')
const carts = document.querySelector('.carts')
const resumCart = document.querySelector('.resumCart')
const btnAddAndCart = document.querySelector('.btnAddAndCart')
const back = document.querySelector('.back')
const sub = document.querySelector('.sub')
const qtd = document.querySelector('.qtd')
const add = document.querySelector('.add')
const shop = document.querySelector('.shop')
const shopQtd = document.querySelector('.shopQtd')
const valueUnd = document.querySelector('.valueUnd')
const qtdTot = document.querySelector('.qtdTot')
const valueTot = document.querySelector('.valueTot')
const cartShop = document.querySelector('.cartShop')
const myCart = document.querySelector('.myCart')
const deleteCart = document.querySelector('.deleteCart')
const imageProdMain = document.querySelector('.imageProdMain')
const imageSec1 = document.querySelector('.imageSec1')
const imageSec2 = document.querySelector('.imageSec2')
const imageSec3 = document.querySelector('.imageSec3')
const imageSec4 = document.querySelector('.imageSec4')

let qtdAdd = 0
let valueUn = 125
let qtdProd = 0
let totValue = 0
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
    valueUn = 125
    qtdAdd += 1
    qtdProd = qtdAdd
    cartQtd +=1
    totValue = valueUn*qtdProd
    shop.style.display = 'flex'
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
    qtdTot.innerHTML = qtdProd
    valueUnd.innerHTML = `$${valueUn}.00`
    valueTot.innerHTML = `$${totValue}.00`
    myCart.style.display = 'none'
    cartShop.style.display = 'flex'
})
sub.addEventListener('click',()=>{
    if(qtdAdd > 0 && cartQtd > 0){
        qtdAdd -= 1
        cartQtd -=1
        qtdProd -=1
        totValue -= 125
    }
    if(qtdAdd == 0){
        shop.style.display = 'none'
    }
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
    qtdTot.innerHTML = qtdProd
    valueTot.innerHTML = `$${totValue}.00`
})
deleteCart.addEventListener('click', ()=>{
    myCart.style.display = 'block'
    cartShop.style.display = 'none'
    shop.style.display = 'none'
    cartQtd = 0
    qtdAdd = 0
    valueUn = 0
    qtdProd = 0
    totValue = 0
    qtd.innerHTML = qtdAdd
})
imageSec1.addEventListener('click',()=>{
    imageSec1.style.opacity = '1'
    imageSec2.style.opacity = '.4'
    imageSec3.style.opacity = '.4'
    imageSec4.style.opacity = '.4'
    imageProdMain.style.backgroundImage= 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
})
imageSec2.addEventListener('click',()=>{
    imageSec1.style.opacity = '.4'
    imageSec2.style.opacity = '1'
    imageSec3.style.opacity = '.4'
    imageSec4.style.opacity = '.4'
    imageProdMain.style.backgroundImage= 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
})
imageSec3.addEventListener('click',()=>{
    imageSec1.style.opacity = '.4'
    imageSec2.style.opacity = '.4'
    imageSec3.style.opacity = '1'
    imageSec4.style.opacity = '.4'
    imageProdMain.style.backgroundImage= 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
})
imageSec4.addEventListener('click',()=>{
    imageSec1.style.opacity = '.4'
    imageSec2.style.opacity = '.4'
    imageSec3.style.opacity = '.4'
    imageSec4.style.opacity = '1'
    imageProdMain.style.backgroundImage= 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
})