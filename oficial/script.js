const btnMenu = document.querySelector('.iconMenu')
const boxMenu = document.querySelector('.boxMenu')

import scrollView from "./scrollView.mjs"

const sobre = document.querySelector('.sobre')
const section2 = document.querySelector('.section2')

const portfolio = document.querySelector('.portfolio')
const section4 = document.querySelector('.section4')

const servicos = [...document.querySelectorAll('.servicos')]
const section5 = [...document.querySelectorAll('.section5')]

const contato = document.querySelector('.contato')
const footer = document.querySelector('footer')

scrollView(sobre, section2)
scrollView(portfolio, section4)
scrollView(servicos, section5)
scrollView(contato, footer)

// window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.section2',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

ScrollReveal().reveal('.section3',{
    duration: 1000,
    distance:'500px',
    origin: 'rigth'
})

ScrollReveal().reveal('.section4',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})

// ScrollReveal().reveal('.section5',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'rigth'
// })

ScrollReveal().reveal('footer',{
    duration: 1500,
    distance:'500px',
    origin: 'left'
})


// ScrollReveal().reveal('.html',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'left'
// })

// ScrollReveal().reveal('.js',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'rigth'
// })

// ScrollReveal().reveal('.css',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'top'
// })

// ScrollReveal().reveal('.node',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'left'
// })

// ScrollReveal().reveal('.mysql',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'top'
// })

// ScrollReveal().reveal('.mongo',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'rigth'
// })

// ScrollReveal().reveal('.bootstrap',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'left'
// })

// ScrollReveal().reveal('.figma',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'top'
// })

// ScrollReveal().reveal('.ilustrator',{
//     duration: 1500,
//     distance:'500px',
//     origin: 'rigth'
// })

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




