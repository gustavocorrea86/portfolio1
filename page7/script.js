const menuMobile = document.querySelector('.menuMobile')
const btnMenu = document.querySelector('.btnMenuMobile')
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
const btnAddCart = document.querySelector('.btnAddCart')
const imgMainModal = document.querySelector('.imgMainModal')
const imgSec = document.querySelector('.imageProdSec')
const modal = document.querySelector('dialog')
const btnClose = document.querySelector('.btnClose')
const fundo = document.querySelector('body')
const nextModal = document.querySelector('.nextModal')
const backModal = document.querySelector('.backModal')
const nextMobile = document.querySelector('.nextMobile')
const backMobile = document.querySelector('.backMobile')
const imageProdMain = document.querySelector('.imageProdMain')
const photoProd = document.querySelector('.photoProd')

let aux = 0
let qtdAdd = 0
let valueUn = 125
let qtdProd = 0
let totValue = 0
let cartQtd = 0

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('openMenu')
    photoProd.style.position = 'static' 
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
        photoProd.style.position = 'absolute'
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

imgSec.addEventListener('click',()=>{
    modal.showModal()
    fundo.style.opacity = '.4'
    aux = 0
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
})

btnClose.addEventListener('click', ()=>{
    modal.close()
    fundo.style.opacity = '1'
})

function photoAfter(){
    
}
nextModal.addEventListener('click', ()=>{
    aux += 1
    if(aux == 0){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else if(aux == 1){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 3){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }else{
        aux = 0
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }
})
backModal.addEventListener('click', ()=>{
    aux -=1
    if(aux == 2){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 1){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 0){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else{
        aux = 3
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }
})

nextMobile.addEventListener('click', ()=>{
    aux += 1
    if(aux == 0){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else if(aux == 1){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 3){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }else{
        aux = 0
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }
})
backMobile.addEventListener('click', ()=>{
    aux -=1
    if(aux == 2){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 1){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 0){
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else{
        aux = 3
        imageProdMain.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }
})



