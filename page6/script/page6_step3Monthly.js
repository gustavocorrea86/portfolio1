
let servicesOnlineM = document.querySelector('.servicesOnlineM')
let storageLargerM = document.querySelector('.storageLargerM')
let proCustomM = document.querySelector('.profileCustomM')
localStorage.nameServAdd 
localStorage.servOnline = ''
localStorage.saveCloud = ''
localStorage.profileCustom = ''
let next = document.querySelector('.nextx')
let typePlanAdd = ''
let addServOnli = 1
let cloudSave = 2
let customProfile = 3
servicesOnlineM.addEventListener('click', ()=>{
    if(servicesOnlineM.style.border == '3px solid var(--Marine_blue)'){
        servicesOnlineM.style.backgroundColor = 'white'
        servicesOnlineM.style.border = '1px solid var(--Light_gray)'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) -  1
        localStorage.addServOnli = 0
        localStorage.servOnline = ''
    }else{
        servicesOnlineM.style.backgroundColor = 'var(--cadetblue)'
        servicesOnlineM.style.border = '3px solid var(--Marine_blue)'
        localStorage.addServOnli = 1
        localStorage.servOnline = 'Online Service'
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(addServOnli)
    }
})
storageLargerM.addEventListener('click', ()=>{
    if(storageLargerM.style.border == '3px solid var(--Marine_blue)'){
        storageLargerM.style.backgroundColor = 'white'
        storageLargerM.style.border = '1px solid var(--Light_gray)'
        localStorage.cloudSave = 0
        localStorage.totalPlan = localStorage.totalPlan - 2
        localStorage.saveCloud = ''
    }else{
        storageLargerM.style.backgroundColor = 'var(--cadetblue)'
        storageLargerM.style.border = '3px solid var(--Marine_blue)'
        localStorage.cloudSave = 2
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(localStorage.cloudSave) 
        localStorage.saveCloud = 'Larger Storage'

    }
})
proCustomM.addEventListener('click', ()=>{
    if(proCustomM.style.border == '3px solid var(--Marine_blue)'){
        proCustomM.style.backgroundColor = 'white'
        proCustomM.style.border = '1px solid var(--Light_gray)'
        localStorage.customProfile = 0
        localStorage.totalPlan = localStorage.totalPlan - 3
        localStorage.profileCustom = ''
    }else{
        proCustomM.style.backgroundColor = 'var(--cadetblue)'
        proCustomM.style.border = '3px solid var(--Marine_blue)'
        localStorage.customProfile = 3
        localStorage.totalPlan = parseInt(localStorage.totalPlan) + parseInt(localStorage.customProfile )
        localStorage.profileCustom = 'Customizable Profile'
        }
})