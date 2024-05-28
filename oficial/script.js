const btnMenu = document.querySelector('.iconMenu')
const boxMenu = document.querySelector('.boxMenu')

// btnMenu.addEventListener('click', ()=>{
//     btnMenu.classList.toggle('openMenu')
//     menuMobile.style.transition = "1s ease";
//     if( menuMobile.style.left == '0%'){
//         menuMobile.style.left = '100%'
//     }else{
//         menuMobile.style.left = '0%'
//     }
// })

const servicos = document.querySelector('.servicos')
const img5 = document.querySelector('.img5')

btnMenu.addEventListener('click',()=>{
    if(boxMenu.style.visibility === 'hidden'){
        boxMenu.style.visibility = 'hidden'
        
    }else{
       
        ScrollReveal().reveal('.boxMenu',{
            duration: 1500,
            distance:'500px',
            origin: 'rigth'
        })
    }
    
})



// servicos.addEventListener('click', ()=>{
//    img5.scrollIntoView({behavior:'smooth'})
// })

window.sr = ScrollReveal({reset: true})

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



