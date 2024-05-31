
function scrollView(door, element){
        door.addEventListener('click', ()=>{
        element.scrollIntoView({behavior:'smooth'})
    })
}
export default scrollView
