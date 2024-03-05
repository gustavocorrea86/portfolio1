const visor = document.querySelector('#tela')
    const visorRes = document.querySelector('.res')
    const calculadora = document.querySelector('#calculadora')
    let btns = document.querySelectorAll('button')
    let aux1 = ''
    let resultado = ''
    btns = [...btns]
    btns.map((name, posicao, vet)=>{console.log(name, posicao)})

    btns[0].addEventListener('click',()=>{ // clean
        visor.style.fontSize = '30px'
        visor.innerHTML = ''
        aux1 = ''
        visorRes.innerHTML = ''
        resultado = ''
    })
    btns[1].addEventListener('click', ()=>{
        calculadora.style.backgroundColor = 'rgb(149, 149, 149)'
    })
    btns[2].addEventListener('click', ()=>{
        visor.innerHTML += '%'
        aux1 += '/100*'
    })
    btns[3].addEventListener('click', ()=>{
        visor.innerHTML += '&divide;'
        aux1 += '/'
    })
    btns[4].addEventListener('click', ()=>{ // back
        aux1 = aux1.slice(0, -1)
        visor.innerHTML = aux1
    })
    btns[5].addEventListener('click', ()=>{
        visor.innerHTML += '1'
        aux1 += '1'
    })
    btns[6].addEventListener('click', ()=>{
        visor.innerHTML += '2'
        aux1 += '2'
    })
    btns[7].addEventListener('click', ()=>{
        visor.innerHTML += '3'
        aux1 += '3'
    })
    btns[8].addEventListener('click', ()=>{ 
        visor.innerHTML += 'x'
        aux1 += '*'
    })
    btns[9].addEventListener('click', ()=>{ //black
        calculadora.style.backgroundColor = 'black'
    })
    btns[10].addEventListener('click', ()=>{ 
        visor.innerHTML += '4'
        aux1 += '4'
    })
    btns[11].addEventListener('click', ()=>{ 
        visor.innerHTML += '5'
        aux1 += '5'
    })
    btns[12].addEventListener('click', ()=>{ 
        visor.innerHTML += '6'
        aux1 += '6'
    })
    btns[13].addEventListener('click', ()=>{ // subtracty
        visor.innerHTML += '-'
        aux1 += '-'
    })
    btns[14].addEventListener('click', ()=>{ // white
        calculadora.style.backgroundColor = 'white'
    })
    btns[15].addEventListener('click', ()=>{ 
        visor.innerHTML += '7'
        aux1 += '7'
    })
    btns[16].addEventListener('click', ()=>{ 
        visor.innerHTML += '8'
        aux1 += '8'
    })
    btns[17].addEventListener('click', ()=>{ 
        visor.innerHTML += '9'
        aux1 += '9'
    })
    btns[18].addEventListener('click', ()=>{ // =
        visor.style.fontSize = '15px'
        visorRes.style.fontSize = '40px'
        resultado = eval(aux1)
        visorRes.innerHTML =  resultado
        
    })
    btns[19].addEventListener('click', ()=>{ 
        visor.innerHTML += '+'
        aux1 += '+'
    })
    btns[20].addEventListener('click', ()=>{ 
        visor.innerHTML += '0'
        aux1 += '0'
    })
    btns[21].addEventListener('click', ()=>{ 
        visor.innerHTML += '00'
        aux1 += '00'
    })
    btns[22].addEventListener('click', ()=>{ 
        visor.innerHTML += '.'
        aux1 += '.'
    })
    function nextCalc(num){
        if(resultado == ''){
            visorRes.innerHTML = resultado
        }else{
            aux1 = ''
            aux1 = resultado
        }
    }