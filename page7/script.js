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
let vetDivs = [... document.querySelectorAll('div')]
const seta = document.querySelector('path')



// window.onresize = function() {
//     if (window.innerWidth < 600) {
//         closeMod()
//     }
//   }
vetDivs.map((el, i)=>{ // coloquei o método map aqui para estuda-lo e ver suas possiveis manipulações
    // console.log(el,i)
})
let aux = 0
let qtdAdd = 0
let valueUn = 125
let qtdProd = 0
let totValue = 0
let cartQtd = 0

btnMenu.addEventListener('click', ()=>{ // abre o menu mobile
    btnMenu.classList.toggle('openMenu')
    photoProd.style.position = 'static' 
    if(menuMobile.style.left == '0%' ){
        menuMobile.style.left = '-100%' 
        photoProd.style.position = 'absolute'
    }else{
        menuMobile.style.left = '0%'
    }
})
carts.addEventListener('click', ()=>{ // aqui abre o carrinho se for clicado
    if(resumCart.style.display =='block'){
        resumCart.style.display ='none'
    }else{
        resumCart.style.display ='block'
    }
})
add.addEventListener('click', ()=>{ // aqui add a quantidade
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
sub.addEventListener('click',()=>{
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
btnAddCart.addEventListener('click', ()=>{ // se o carrinho estiver vazio mostra a mensagem em tela
    if(qtdAdd == 0){
        modalBtnAddToCart.showModal()
        fundo.style.opacity = '.4'
    }else
    shop.style.display = 'flex'
    cartShop.style.display = 'flex'
})
deleteCart.addEventListener('click', ()=>{ // lixeira do carrinho
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
imgSec.addEventListener('click',()=>{ // aqui abre o modal desktop clicando em qualquer lugar da div das fotos secundarias
    vetDivs[26].classList.toggle('borderToggle-0')
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
        vetDivs[26].classList.remove('borderToggle-0')
        vetDivs[27].classList.remove('borderToggle-0')
        vetDivs[28].classList.remove('borderToggle-0')
        vetDivs[29].classList.remove('borderToggle-0')
        modalBtnAddToCart.close()
    }
}
closeModalDesktop.addEventListener('click', ()=>{ // aqui fecha o modal desktop e retorna ao estado anterior
    modal.close()
    fundo.style.opacity = '1'
    vetDivs[26].classList.remove('borderToggle-0')
    vetDivs[27].classList.remove('borderToggle-0')
    vetDivs[28].classList.remove('borderToggle-0')
    vetDivs[29].classList.remove('borderToggle-0')
})
closeModalMobile.addEventListener('click', ()=>{
    modalBtnAddToCart.close()
    fundo.style.opacity = '1'
})
nextModal.addEventListener('click', ()=>{// aqui passa as fotos e deixa a foto secundaria que esta em tela opaca
    aux += 1
    seta.style.color = 'orange'
    if(aux == 0){
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else if(aux == 1){
        vetDivs[27].classList.toggle('borderToggle-0')
        vetDivs[26].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        vetDivs[28].classList.toggle('borderToggle-0')
        vetDivs[27].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else if(aux == 3){
        vetDivs[29].classList.toggle('borderToggle-0')
        vetDivs[28].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }else{
        vetDivs[26].classList.toggle('borderToggle-0')
        vetDivs[29].classList.remove('borderToggle-0')
        aux = 0
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }
})
backModal.addEventListener('click', ()=>{
    aux -=1
    if(aux == 0){
        vetDivs[26].classList.toggle('borderToggle-0')
        vetDivs[27].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-1.jpg)'
    }else if(aux == 1){
        vetDivs[27].classList.toggle('borderToggle-0')
        vetDivs[28].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-2.jpg)'
    }else if(aux == 2){
        vetDivs[28].classList.toggle('borderToggle-0')
        vetDivs[29].classList.remove('borderToggle-0')
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-3.jpg)'
    }else{
        vetDivs[29].classList.toggle('borderToggle-0')
        vetDivs[26].classList.remove('borderToggle-0')
        aux = 3
        imgMainModal.style.backgroundImage = 'url(ecommerce-product-page-main/images/image-product-4.jpg)'
    }
})
nextMobile.addEventListener('click', ()=>{ // aqui passa as fotos no mobile
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
backMobile.addEventListener('click', ()=>{ // aqui volta as fotos no mobile
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



