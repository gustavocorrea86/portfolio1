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
let imgAux = ""
let images = [
    'url(ecommerce-product-page-main/images/image-product-1.jpg)',
    'url(ecommerce-product-page-main/images/image-product-2.jpg)',
    'url(ecommerce-product-page-main/images/image-product-3.jpg)',
    'url(ecommerce-product-page-main/images/image-product-4.jpg)'
]
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
    imgMainModal.style.backgroundImage = images[0]
})

btnClose.addEventListener('click', ()=>{
    modal.close()
    fundo.style.opacity = '1'
    imgAux = ""
})

nextModal.addEventListener('click', ()=>{
   for(var c = 0; c < 4; c++){

    imgAux = images[c]

   }

   imgMainModal.style.backgroundImage = imgAux
})

// if(imgAux= images[0]){
//     imgAux= images[1]
// }
// else if(imgAux= images[1]){
//     imgAux= images[2]
// }else{
//     imgAux= images[3]
// }

//    if(imgMainModal.style.backgroundImage = images[0]){
//         imgMainModal.style.backgroundImage = images[1]
//    }else if( imgMainModal.style.backgroundImage = images[1]){
//         imgMainModal.style.backgroundImage = images[2]
//    }else{
//     imgMainModal.style.backgroundImage = images[3]
//    }


