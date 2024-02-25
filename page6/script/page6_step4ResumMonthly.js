let next = document.querySelector('.nextx')
let subTotalPlans = document.querySelector('.subTotalPlans')
let addServ1 = document.querySelector('.addServ1')
let addServ2 = document.querySelector('.addServ2')
let addServ3 = document.querySelector('.addServ3')
let resumPlans = document.querySelector('.resumPlans')
let onliServ = document.querySelector('.onliServ')
let largerStorage = document.querySelector('.largerStorage')
let customTheme = document.querySelector('.customTheme')
let totalPlanAndAdd = document.querySelector('.totalPlanAndAdd')
let totalPla = 0
let subTotal = localStorage.subTotal
let userName  = document.querySelector('.userName').innerHTML = (localStorage.nameUser)
let userEmail = document.querySelector('.userEmail').innerHTML = (localStorage.emailUser)
let userPhone = document.querySelector('.userPhone').innerHTML = (localStorage.phoneUser)

resumPlans.innerHTML = `${localStorage.typePlanAdd} (${localStorage.plan}) `
resumPlans.style.color = 'var(--Marine_blue)'
subTotalPlans.innerHTML = `$${localStorage.subTotal} / mo`

addServ1.innerHTML = (localStorage.servOnline)
onliServ.innerHTML = `$${localStorage.addServOnli} / mo`

addServ2.innerHTML = (localStorage.saveCloud)
largerStorage.innerHTML = `$${localStorage.cloudSave} / mo`

addServ3.innerHTML = (localStorage.profileCustom)
customTheme.innerHTML = `${localStorage.customProfile}`

addServ1.style.color = 'var(--Light_gray)'
addServ1.style.marginTop = '10px' 
addServ2.style.color = 'var(--Light_gray)'
addServ2.style.marginTop = '10px' 
addServ3.style.color = 'var(--Light_gray)'
addServ3.style.marginTop = '10px' 


if((addServ1.innerHTML = (localStorage.servOnline)) && (onliServ.innerHTML = `$${localStorage.addServOnli} / yr`)){
    addServ1.innerHTML = (localStorage.servOnline)
    onliServ.innerHTML = `$${localStorage.addServOnli} / mo`
}else{
    addServ1.style.display = 'none'
    onliServ.style.display = 'none'
}
if((addServ2.innerHTML = (localStorage.saveCloud)) && (largerStorage.innerHTML = `$${localStorage.cloudSave} / yr`)){
    addServ2.innerHTML = (localStorage.saveCloud)
    largerStorage.innerHTML = `$${localStorage.cloudSave} / mo`
}else{
    addServ2.style.display = 'none'
    largerStorage.style.display = 'none'
}

if((addServ3.innerHTML = (localStorage.profileCustom)) && (customTheme.innerHTML = `$${localStorage.customProfile} / yr`)){
    addServ3.innerHTML = (localStorage.profileCustom)
    customTheme.innerHTML = `$${localStorage.customProfile} / mo`
}else{
    addServ3.style.display = 'none'
    customTheme.style.display = 'none'
}

totalPlanAndAdd.innerHTML = `$${localStorage.totalPlan} / mo`

