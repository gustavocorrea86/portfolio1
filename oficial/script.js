import scrollView from "./scrollView.mjs"

const sobre = document.querySelector('.sobre')
const sobreDesktop = document.querySelector('.sobreDesktop')
const section2 = document.querySelector('.section2')
scrollView(sobre, section2)
scrollView(sobreDesktop, section2)

const portfolio = document.querySelector('.portfolio')
const portfolioDesktop = document.querySelector('.portfolioDesktop')
const section4 = document.querySelector('.section4')
scrollView(portfolio, section4)
scrollView(portfolioDesktop, section4)

const servicos = document.querySelector('.servicos')
const servicosDesktop = document.querySelector('.servicosDesktop')
const section5 = document.querySelector('.section5')
scrollView(servicos, section5)
scrollView(servicosDesktop, section5)


const contato = document.querySelector('.contato')
const contatoDesktop = document.querySelector('.contatoDesktop')
const footer = document.querySelector('footer')
scrollView(contato, footer)
scrollView(contatoDesktop, footer)

// window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.subSection2',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})
ScrollReveal().reveal('.h3quemsou',{
    duration: 1500,
    distance:'500px',
    origin: 'right'
})

ScrollReveal().reveal('.subSection3',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.subSection4',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.secProjRealizados',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.proj1',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.proj1Mobile',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.proj2',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.proj3',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.proj4',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.proj5',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.proj6',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.proj7',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa1',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa2',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.etapa3',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa4',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.etapa5',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa6',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.etapa7',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa8',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.etapa9',{
    duration: 1500,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.etapa10',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

function findNumber(arr, k) {
    const found = arrTeste.find((el)=> el === 1);
    console.log(found)

}
console.log(findNumber(5, 1, 2, 3, 4, 5, 1))


