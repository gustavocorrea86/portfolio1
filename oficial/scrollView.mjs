function scrollView(door, element){
    door.addEventListener('click', ()=>{
    element.scrollIntoView({behavior:'smooth'})
     })
}

module.export = scrollView