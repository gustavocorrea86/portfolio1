
let servicesOnlineY = document.querySelector('.servicesOnlineY')
let storageLargerY = document.querySelector('.storageLargerY')
let proCustomY = document.querySelector('.profileCustomY')
let valueAdd = []
let nameSerAdd = ''
localStorage.nameServAdd 
localStorage.servOnline = ''
localStorage.saveCloud = ''
localStorage.profileCustom = ''
let next = document.querySelector('.nextx')
let typePlanAdd = ''
let addServOnli = 10
let cloudSave = 20
let customProfile = 25
servicesOnlineY.addEventListener('click', ()=>{
    if(servicesOnlineY.style.border == '3px solid var(--Marine_blue)'){
        servicesOnlineY.style.backgroundColor = 'white'
        servicesOnlineY.style.border = '1px solid var(--Light_gray)'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) -  10
        localStorage.addServOnli = 0
        localStorage.servOnline = ''
    }else{
        servicesOnlineY.style.backgroundColor = 'var(--cadetblue)'
        servicesOnlineY.style.border = '3px solid var(--Marine_blue)'
        localStorage.addServOnli = 10
        localStorage.servOnline = 'Online Service'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(addServOnli)
    }
})
storageLargerY.addEventListener('click', ()=>{
    if(storageLargerY.style.border == '3px solid var(--Marine_blue)'){
        storageLargerY.style.backgroundColor = 'white'
        storageLargerY.style.border = '1px solid var(--Light_gray)'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) - 20
    }else{
        storageLargerY.style.backgroundColor = 'var(--cadetblue)'
        storageLargerY.style.border = '3px solid var(--Marine_blue)'
        localStorage.cloudSave = 20
        localStorage.saveCloud = 'Larger Storage'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(cloudSave)
    }
})
proCustomY.addEventListener('click', ()=>{
    if(proCustomY.style.border == '3px solid var(--Marine_blue)'){
        proCustomY.style.backgroundColor = 'white'
        proCustomY.style.border = '1px solid var(--Light_gray)'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) - 25
    }else{
        proCustomY.style.backgroundColor = 'var(--cadetblue)'
        proCustomY.style.border = '3px solid var(--Marine_blue)'
        localStorage.customProfile = 25
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(customProfile)
        localStorage.profileCustom = 'Customizable Profile'
    }
})
