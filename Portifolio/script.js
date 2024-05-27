const btnMenu = document.querySelector('.iconMenu')
const menuMobile = document.querySelector('.menuMobile')
btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('openMenu')
    menuMobile.style.transition = "1s ease";
    if( menuMobile.style.left == '0%'){
        menuMobile.style.left = '100%'
    }else{
        menuMobile.style.left = '0%'
    }
})

const servicos = document.querySelector('.servicos')
const img1 = document.querySelector('.img1')
img1.classList.add('animate__animated', 'animate__fadeInRight');

servicos.addEventListener('click', ()=>{
   img5.scrollIntoView({behavior:'smooth'})
})

window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.img1')
ScrollReveal().reveal('.img2')

ScrollReveal().reveal('.img3',{
    rotate:{
        x:0,
        y:200
    }
       
    // delay: 700,
    // scale: 0.5,
    //distance:'500px'
    // duration: 2000

})

ScrollReveal().reveal('.img4')


function carregar(){
    ScrollReveal().reveal('.img5')
}


img1.addEventListener('animationend', () => {
    carregar()
});

