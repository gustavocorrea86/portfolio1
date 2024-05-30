const btnMenu = document.querySelector('.iconMenu')
const boxMenu = document.querySelector('.boxMenu')

const servicos = document.querySelector('.servicos')
const sobre = document.querySelector('.sobre')
const section2 = document.querySelector('.section2')
const img5 = document.querySelector('.img5')
// import scrollView from "./scrollView.mjs"

window.sr = ScrollReveal({reset: true})

function scrollView(door, element){
    door.addEventListener('click', ()=>{
    element.scrollIntoView({behavior:'smooth'})
    
     })
}

scrollView(sobre, section2)

ScrollReveal().reveal('.img1',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.img2',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.img3',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.img4',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})
ScrollReveal().reveal('.img5',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.h3quemsou',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.h3apresentacao',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

const texto = document.querySelector('.h3apresentacao')
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 75 * i)
    })
   }
   typeWriter(texto)



