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
const modalDesktop = document.querySelector('.imageProdSec')
const modal = document.querySelector('.modalPhotosDesktop')
const closeModalDesktop = document.querySelector('.closeModalDesktop')
const closeModalMobile = document.querySelector('.closeModalMobile')
const fundo = document.querySelector('body')
const nextModal = document.querySelector('.nextModal')
const backModal = document.querySelector('.backModal')
const nextMobile = document.querySelector('.nextMobile')
const backMobile = document.querySelector('.backMobile')
const imageProdMain = document.querySelector('.imageProdMain')
const photoProd = document.querySelector('.photoProd')
const modalBtnAddToCart = document.querySelector('.modalBtnAddToCart')
const seta = document.querySelector('path')
let imgsSec = [...document.querySelectorAll('.imgSecModal')]
let selectToggle = [...document.querySelectorAll('.borderToggle-0')]
let aux = 0
let qtdAdd = 0
let valueUn = 125
let qtdProd = 0
let totValue = 0
let cartQtd = 0
const somBtn = new Audio('cartoon-splat-6086.mp3')
btnMenu.addEventListener('click', ()=>{ // open the menu mobile
    btnMenu.classList.toggle('openMenu')
    somBtn.play()
    photoProd.style.position = 'static' 
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
        photoProd.style.position = 'absolute'
        btnMenu.classList.remove('openMenu')
    }else{
        menuMobile.style.left = '0%'
    }
})
carts.addEventListener('click', ()=>{ // here open the cart if click
    if(resumCart.style.display =='block'){
        resumCart.style.display ='none'
    }else{
        resumCart.style.display ='block'
    }
})
add.addEventListener('click', ()=>{ // here adds one quatity
    valueUn = 125
    qtdAdd += 1
    qtdProd = qtdAdd
    cartQtd +=1
    totValue = valueUn*qtdProd
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
    qtdTot.innerHTML = qtdProd
    valueUnd.innerHTML = `$${valueUn}.00`
    valueTot.innerHTML = `$${totValue}.00`
    myCart.style.display = 'flex'
})
sub.addEventListener('click',()=>{ // subtrai a qtd
    if(qtdAdd > 0 && cartQtd > 0){
        qtdAdd -= 1
        cartQtd -=1
        qtdProd -=1
        totValue -= 125
    }
    if(qtdAdd == 0){
        cartShop.style.display = 'none'
        myCart.style.display = 'flex'
        shop.style.display = 'none'
    }
    qtd.innerHTML = qtdAdd
    shopQtd.innerHTML = cartQtd
    qtdTot.innerHTML = qtdProd
    valueTot.innerHTML = `$${totValue}.00`
})
btnAddCart.addEventListener('click', ()=>{ // if the cart is empty watch the message at the screen 
    if(qtdAdd == 0){
        modalBtnAddToCart.showModal()
        fundo.style.opacity = '.2'
    }else
    shop.style.display = 'flex'
    cartShop.style.display = 'flex'
})
deleteCart.addEventListener('click', ()=>{ // delete cart
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

imgsSec.map((el)=>{
   el.addEventListener('click',()=>{
    removeSelect()
    el.classList.toggle('borderToggle-0')
   })
})
const removeSelect=()=>{ // remove toggle
    imgsSec.map((el)=>{
        el.classList.remove('borderToggle-0')
     })
}
imgsSec[0].addEventListener('click',()=>{ // here the user has the option click at the image
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    aux = 0
})
imgsSec[1].addEventListener('click',()=>{
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    aux = 1
})
imgsSec[2].addEventListener('click',()=>{
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    aux = 2
})
imgsSec[3].addEventListener('click',()=>{
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    aux = 3
})
modalDesktop.addEventListener('click',()=>{ //  aqui abre o modal desktop clicando em qualquer lugar da div das fotos secundarias
    imgsSec[0].classList.toggle('borderToggle-0')
    modal.showModal()
    fundo.style.opacity = '.4'
    aux = 0
    imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    modalClose = 1
})
window.onresize = function() { // fecha modal se chegar em < 600px
    if (window.innerWidth < 600) {
        modal.close()
        fundo.style.opacity = '1'
        modalBtnAddToCart.close()
    }
}
closeModalDesktop.addEventListener('click', ()=>{ // aqui fecha o modal desktop e retorna ao estado anterior
    modal.close()
    fundo.style.opacity = '1'
    imgsSec.map((el)=>{
        el.classList.remove('borderToggle-0')
    })
})
closeModalMobile.addEventListener('click', ()=>{
    modalBtnAddToCart.close()
    fundo.style.opacity = '1'
})
nextModal.addEventListener('click', ()=>{// aqui passa as fotos ao clicar na seta e deixa a foto secundaria que esta em tela opaca
    aux ++
    if(aux == 1){
        removeSelect()
        imgsSec[1].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        removeSelect()
        imgsSec[2].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 3){
        removeSelect()
        imgsSec[3].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }else{
        removeSelect()
        imgsSec[0].classList.toggle('borderToggle-0')
        aux = 0
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }
})
backModal.addEventListener('click', ()=>{
    aux --
    if(aux == 0){
        removeSelect()
        imgsSec[0].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else if(aux == 1){
        removeSelect()
        imgsSec[1].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        removeSelect()
        imgsSec[2].classList.toggle('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else{
        removeSelect()
        imgsSec[3].classList.toggle('borderToggle-0')
        aux = 3
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }
})
nextMobile.addEventListener('click', ()=>{ // here next images mobile
    aux ++
    if(aux == 1){
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
backMobile.addEventListener('click', ()=>{ // back images mobile
    aux --
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
const linkMenu = [...document.querySelectorAll('li')]

linkMenu.map((el, i)=>{
    console.log(el)
    el.addEventListener('click',()=>{
        location.href = 'http://127.0.0.1:5501/page7/erro404.html'
        location.href = 'http://gustavocorrea86.github.io/portifolio/page7/erro404'
    })
})


