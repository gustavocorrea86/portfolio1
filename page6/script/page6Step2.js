let boxButton = document.querySelector('.boxButton')
let circle = document.querySelector('.circle')
let monthly = document.querySelector('.monthly')
let yearly = document.querySelector('.yearly')
let arcadeM = document.querySelector('.arcadeM')
let arcadeY = document.querySelector('.arcadeY')
let advancedY = document.querySelector('.advancedY')
let advancedM = document.querySelector('.advancedM')
let proY = document.querySelector('.proY')
let proM = document.querySelector('.proM')
let nextYr = document.querySelector('.nextYr')
let nextMo = document.querySelector('.nextMo')
localStorage.totalPlan = 0
localStorage.planAdvancedY = 0
localStorage.planAdvancedM = 0
localStorage.planPro = 0
let addServOnline = 10
let cloudSave = 20
let customProfile = 25
localStorage.typePlanAdd = ''
let subTotal = 0

let valueAdd = []
let resumPlans = document.querySelector('.resumPlans')
let subTotalPlan = document.querySelector('.subTotalPlans')

let resum = document.querySelector('.resum')
let nameServAdd = []
let addServ1 = document.querySelector ('.addServ1')
let addServ2 = document.querySelector ('.addServ2')
let addServ3 = document.querySelector ('.addServ3')

let onliServ = document.querySelector('.onliServ')
let largerStorage = document.querySelector('.largerStorage')
let customTheme = document.querySelector ('.customTheme')

let servOnline = 'Online Service'
let saveCloud = 'Larger Storege'
let profileCustom = 'Custom Profile'

let totalPlanAndAdd = document.querySelector('.totalPlanAndAdd')
let servAddMonthly = document.querySelector('.servAddMonthly')
let servicesOnline = document.querySelector('.servicesOnline')
let storageLarger = document.querySelector('.storageLarger')
let proCustom = document.querySelector('.profileCustom')
let servicesOnlineY = document.querySelector('.servicesOnlineY')
let servicesOnlineM = document.querySelector('.servicesOnlineM')
let storageLargerY = document.querySelector('.storageLargerY')
let storageLargerM = document.querySelector('.storageLargerM')
let proCustomY = document.querySelector('.profileCustomY')
let proCustomM = document.querySelector('.profileCustomM')
let vlservicesOnline = document.querySelector('.vlservicesOnline')
let vlstorageLarger = document.querySelector('.vlstorageLarger')
let vlproCustom = document.querySelector('.vlproCustom')
let backs = document.querySelector('.back')
let finish = document.querySelector('.finish')
let sec = document.querySelector('.section')
let modal = document.querySelector('dialog')
let fundo = document.querySelector('body')
closeModal = document.querySelector('button')
arcadeY.style.border = '2px solid var(--Light_gray)';
advancedY.style.border = '2px solid var(--Light_gray)'; 
proY.style.border = '2px solid var(--Light_gray)'; 
yearly.style.color = 'var(--Marine_blue)';

nextMo.style.display = 'none'
localStorage.plan = 'Yearly'
localStorage.totalPlan = 0

nextYr.addEventListener('click',()=>{
    if (localStorage.totalPlan == 0){
        modal.showModal()
        modal.style.zIndex = 1
        fundo.style.opacity = '0.5'
    }else{
        location.href = 'https://gustavocorrea86.github.io/landing_page2/page6_step3Yearly.html'
    }
})
nextMo.addEventListener('click',()=>{
    if (localStorage.totalPlan == 0){
        modal.showModal()
        modal.style.zIndex = 1
        fundo.style.opacity = '0.5'
    }else{
        location.href = 'https://gustavocorrea86.github.io/landing_page2/page6_step3Monthly.html'
    }
})
closeModal.addEventListener('click', ()=>{
    modal.close()
    fundo.style.opacity = '1'
})
boxButton.addEventListener ('click', ()=>{
   
    if(circle.style.left == '0%'){
        arcadeY.style.display = 'flex'
        arcadeM.style.display = 'none'
        advancedY.style.display = 'flex'
        advancedM.style.display = 'none'
        proY.style.display = 'flex'
        proM.style.display = 'none'
        nextYr.style.display = 'flex'
        nextMo.style.display = 'none'
        localStorage.plan = 'Yearly'
        circle.style.left = '44%';
        monthly.style.color ='var(--Light_gray)';
        yearly.style.color = 'var(--Marine_blue)';
        arcadeY.style.border = '2px solid var(--Light_gray)';
        arcadeM.style.border = '2px solid var(--Light_gray)';    
        advancedY.style.border = '2px solid var(--Light_gray)'; 
        advancedM.style.border = '2px solid var(--Light_gray)'; 

        proY.style.border = '2px solid var(--Light_gray)'; 
        proM.style.border = '2px solid var(--Light_gray)'; 
        arcadeY.style.backgroundColor = 'white'
        arcadeM.style.backgroundColor = 'white'
        advancedY.style.backgroundColor = 'white'
        advancedM.style.backgroundColor = 'white'
        proY.style.backgroundColor = 'white'
        proM.style.backgroundColor = 'white'
        localStorage.totalPlan = 0
        localStorage.planArcadeM = 0
        localStorage.planArcadeY = 0
        localStorage.planAdvancedY = 0
        localStorage.planAdvancedM = 0
        localStorage.planproY = 0
        localStorage.planProM = 0
        localStorage.typePlanAdd = ''
        localStorage.subTotal = 0

    }else{
        arcadeY.style.display = 'none'
        arcadeM.style.display = 'flex'
        advancedY.style.display = 'none'
        advancedM.style.display = 'flex'
        proY.style.display = 'none'
        proM.style.display = 'flex'
        nextYr.style.display = 'none'
        nextMo.style.display = 'flex'
        localStorage.plan = 'Monthly'
        localStorage.totalPlan = 0
        localStorage.planArcadeM = 0
        localStorage.planArcadeY = 0
        localStorage.planAdvancedY = 0
        localStorage.planAdvancedM = 0
        localStorage.planProY = 0
        localStorage.planProM = 0
        localStorage.subTotal = 0
        localStorage.typePlanAdd = ''
        circle.style.left = '0%';
        monthly.style.color ='var(--Marine_blue)';
        yearly.style.color = 'var(--Light_gray)';
        
        arcadeY.style.border = '2px solid var(--Light_gray)'; 
        arcadeM.style.border = '2px solid var(--Light_gray)';  
        advancedY.style.border = '2px solid var(--Light_gray)'; 
        advancedM.style.border = '2px solid var(--Light_gray)'; 
        proY.style.border = '2px solid var(--Light_gray)';
        proM.style.border = '2px solid var(--Light_gray)'; 
        arcadeY.style.backgroundColor = 'white'
        arcadeM.style.backgroundColor = 'white'
        advancedY.style.backgroundColor = 'white'
        advancedM.style.backgroundColor = 'white'
        proY.style.backgroundColor = 'white'
        proM.style.backgroundColor = 'white'
        

    }
})

arcadeY.addEventListener('click', ()=>{
    if (arcadeY.style.border == '4px solid var(--Marine_blue)'){
        arcadeY.style.backgroundColor = 'white'
        arcadeY.style.border = '2px solid var(--Light_gray)';  
        localStorage.totalPlan = 0;
        localStorage.subTotal = 0
        nextYr.style.backgroundColor = 'var(--Light_gray)';
        nextYr.style.color = 'var(--Marine_blue)';
        localStorage.typePlanAdd = ''
        localStorage.totalPlan = 0
        localStorage.planArcadeY = 0
        
    }else{
        proY.style.backgroundColor = 'white'
        advancedY.style.backgroundColor = 'white'
        arcadeY.style.backgroundColor = 'var(--cadetblue)'
        arcadeY.style.border = '4px solid var(--Marine_blue)';
        localStorage.planArcadeY = 90
        localStorage.planProY = 0
        localStorage.planAdvancedY = 0 
        localStorage.totalPlan = localStorage.planArcadeY
        localStorage.subTotal = localStorage.planArcadeY
        advancedY.style.border = '2px solid var(--Light_gray)';  
        localStorage.planAdvancedY = 0
        proY.style.border = '2px solid var(--Light_gray)'; 
        nextYr.style.backgroundColor = 'var(--Marine_blue)';
        nextYr.style.color = 'white'
        localStorage.typePlanAdd = 'Arcade'
    }
})
advancedY.addEventListener('click', ()=>{
    if( advancedY.style.border == '4px solid var(--Marine_blue)'){
        advancedY.style.backgroundColor = 'white'
        advancedY.style.border = '2px solid var(--Light_gray)';  
        localStorage.totalPlan = 0
        localStorage.planArcadeY = 0 
        localStorage.subTotal = 0
        nextYr.style.backgroundColor = 'var(--Light_gray)';
        nextYr.style.color = 'var(--Marine_blue)'
        localStorage.typePlanAdd = ''
    }else{
        arcadeY.style.backgroundColor = 'white'
        proY.style.backgroundColor = 'white'
        advancedY.style.backgroundColor = 'var(--cadetblue)'
        advancedY.style.border = '4px solid var(--Marine_blue)';
        localStorage.planAdvancedY = 120
        localStorage.planArcadeY = 0
        localStorage.planProY = 0
        localStorage.totalPlan = localStorage.planAdvancedY
        localStorage.subTotal = localStorage.planAdvancedY
        arcadeY.style.border = '2px solid var(--Light_gray)'; 
        proY.style.border = '2px solid var(--Light_gray)'; 
        nextYr.style.backgroundColor = 'var(--Marine_blue)';
        nextYr.style.color = 'white'
        localStorage.typePlanAdd = 'Advanced'
    }
})

proY.addEventListener('click', ()=>{
    if (proY.style.border == '4px solid var(--Marine_blue)'){
        proY.style.backgroundColor = 'white'
        proY.style.border = '2px solid var(--Light_gray)'; 
        localStorage.totalPlan = 0 
        localStorage.subTotal = 0
        localStorage.planProY = 0
        nextYr.style.backgroundColor = 'var(--Light_gray)';
        nextYr.style.color = 'var(--Marine_blue)';
        localStorage.typePlanAdd = ''
    }else{
        arcadeY.style.backgroundColor = 'white'
        advancedY.style.backgroundColor = 'white'
        proY.style.border = '4px solid var(--Marine_blue)';
        proY.style.backgroundColor = 'var(--cadetblue)'
        localStorage.planProY = 150
        localStorage.planAdvancedY = 0 
        localStorage.planArcadeY = 0 
        localStorage.totalPlan = localStorage.planProY
        localStorage.subTotal = localStorage.planProY
        arcadeY.style.border = '2px solid var(--Light_gray)'; 
        advancedY.style.border = '2px solid var(--Light_gray)';  
        nextYr.style.backgroundColor = 'var(--Marine_blue)';
        nextYr.style.color = 'white'
        localStorage.typePlanAdd = 'Pro'
    }
})

arcadeM.addEventListener('click', ()=>{
    if (arcadeM.style.border == '4px solid var(--Marine_blue)'){
        arcadeM.style.backgroundColor = 'white'
        arcadeM.style.border = '2px solid var(--Light_gray)';  
        localStorage.totalPlan = 0;
        localStorage.subTotal = 0
        nextMo.style.backgroundColor = 'var(--Light_gray)';
        nextMo.style.color = 'var(--Marine_blue)';
        localStorage.typePlanAdd = ''
        localStorage.totalPlan = 0
        localStorage.planArcadeM = 0
    }else{
        proM.style.backgroundColor = 'white'
        advancedM.style.backgroundColor = 'white'
        arcadeM.style.backgroundColor = 'var(--cadetblue)'
        arcadeM.style.border = '4px solid var(--Marine_blue)';
        localStorage.planArcadeM = 9
        localStorage.totalPlan = localStorage.planArcadeM
        localStorage.subTotal = localStorage.planArcadeM
        localStorage.planAdvancedM = 0
        localStorage.plaProM = 0
        advancedM.style.border = '2px solid var(--Light_gray)';  
        proM.style.border = '2px solid var(--Light_gray)'; 
        nextMo.style.backgroundColor = 'var(--Marine_blue)';
        nextMo.style.color = 'white'
        localStorage.typePlanAdd = 'Arcade' 
    }
})
advancedM.addEventListener('click', ()=>{
    if( advancedM.style.border == '4px solid var(--Marine_blue)'){
        advancedM.style.backgroundColor = 'white'
        advancedM.style.border = '2px solid var(--Light_gray)';  
        localStorage.totalPlan = 0
        localStorage.subTotal = 0
        localStorage.planAdvancedM = 0
        nextMo.style.backgroundColor = 'var(--Light_gray)';
        nextMo.style.color = 'var(--Marine_blue)'
        localStorage.typePlanAdd = ''
    }else{
        arcadeM.style.backgroundColor = 'white'
        proM.style.backgroundColor = 'white'
        localStorage.planArcadeM = 0
        localStorage.plaProM = 0
        localStorage.planAdvancedM = 12
        advancedM.style.backgroundColor = 'var(--cadetblue)'
        advancedM.style.border = '4px solid var(--Marine_blue)';
        localStorage.totalPlan = localStorage.planAdvancedM
        localStorage.subTotal = localStorage.planAdvancedM
        arcadeM.style.border = '2px solid var(--Light_gray)'; 
        proM.style.border = '2px solid var(--Light_gray)'; 
        nextMo.style.backgroundColor = 'var(--Marine_blue)';
        nextMo.style.color = 'white'
        localStorage.typePlanAdd = 'Advanced'
    }
})
proM.addEventListener('click', ()=>{
    if (proM.style.border == '4px solid var(--Marine_blue)'){
        proM.style.backgroundColor = 'white'
        proM.style.border = '2px solid var(--Light_gray)'; 
        localStorage.totalPlan = 0 
        localStorage.subTotal = 0
        localStorage.planProM = 0
        nextMo.style.backgroundColor = 'var(--Light_gray)';
        nextMo.style.color = 'var(--Marine_blue)';
        localStorage.typePlanAdd = ''
    }else{
        arcadeM.style.backgroundColor = 'white'
        advancedM.style.backgroundColor = 'white'
        proM.style.border = '4px solid var(--Marine_blue)';
        proM.style.backgroundColor = 'var(--cadetblue)'
        localStorage.planProM = 15
        localStorage.planAdvancedM = 0 
        localStorage.planArcadeM = 0 
        localStorage.totalPlan = localStorage.planProM
        localStorage.subTotal = localStorage.planProM
        arcadeM.style.border = '2px solid var(--Light_gray)'; 
        advancedM.style.border = '2px solid var(--Light_gray)';  
        nextMo.style.backgroundColor = 'var(--Marine_blue)';
        nextMo.style.color = 'white'
        localStorage.typePlanAdd = 'Pro'
    }
})

