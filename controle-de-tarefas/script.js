
const addTarefa = document.querySelector('.addTarefa')
const btnAddTarefa = document.querySelector('.btnAddTarefa')
const resumoTarefas = document.querySelector('.resumoTarefas')
const modal = document.querySelector('dialog')
const body = document.querySelector('body')
const cabeçalho = document.querySelector('.cabeçalho');
const hora = document.querySelector('.hora')
const diaH3 = document.querySelector('h3')
let diaSelecionado;
let dia = [];
let qtdDiaMes;
const data = new Date()

let diaAtual = data.getDate()
let mes = data.getMonth()+1;
if (mes == 1){mes = 'Janeiro'; diaMes = 31}
// if ((mes == 2) || (data.getFullYear % 4 == 0)){mes = 'Fevereiro'; qtdDiaMes = 29}else{mes = 'Fevereiro'; diaMes = 28}
if (mes == 2){mes = 'Fevereiro'}
if ((data.getFullYear() % 0) && ( mes == 'Fevereiro')){ qtdDiaMes = 29}else{qtdDiaMes = 28}
if (mes == 3){mes = 'Março'; qtdDiaMes = 31}
if (mes == 4){mes = 'Abril'; qtdDiaMes = 30}
if (mes == 5){mes = 'Maio'; qtdDiaMes = 31}
if (mes == 6){mes = 'Junho'; qtdDiaMes = 30}
if (mes == 7){mes = 'Julho'; qtdDiaMes = 31}
if (mes == 8){mes = 'Agosto'; qtdDiaMes = 31}
if (mes == 9){mes = 'Setembro'; qtdDiaMes = 30}
if (mes == 10){mes = 'Outubro'; qtdDiaMes = 31}
if (mes == 11){mes = 'Novembro'; qtdDiaMes = 30}
if (mes == 12){mes = 'Dezembro'; qtdDiaMes = 31}

let diaSemana = data.getDay()
if (diaSemana == 0){diaSemana = 'Domingo'}
if (diaSemana == 1){diaSemana = 'Segunda-feira'}
if (diaSemana == 2){diaSemana = 'Terça-feira'}
if (diaSemana == 3){diaSemana = 'Quarta-feira'}
if (diaSemana == 4){diaSemana = 'Quinta-feira'}
if (diaSemana == 5){diaSemana = 'Sexta-feira'}
if (diaSemana == 6){diaSemana = 'Sábado'}

const main = document.querySelector('main');
for(var c = 1; c <= qtdDiaMes; c++){
    diaMes = document.createElement('h2');
    main.appendChild(diaMes)
    diaMes.innerHTML = c;
    dia.push(diaMes)
}
cabeçalho.innerHTML = `${diaSemana}, ${diaAtual} de ${mes} de ${data.getFullYear()}`;
dia.map((el,i)=>{
    el.addEventListener('click',()=>{
        modal.showModal()
        diaSelecionado = i+1
        console.log(diaSelecionado)
        diaH3.innerHTML = `${diaSelecionado} ${mes}`
    })
})
const img =[...document.querySelectorAll('img')];
img.map((el,i)=>{
    img[0].addEventListener('click',()=>{
        const horario = document.querySelector('.horario')
        horario.style.display = 'block' 
    })
})

function horario(){
    const data = new Date();
    let minuto = data.getMinutes()
    if(minuto < 10){minuto = '0'+ minuto}
    let segundos = data.getSeconds()
    if(segundos < 10){segundos = '0'+ segundos}
    hora.innerHTML = `Hora: ${data.getHours()} : ${minuto} : ${segundos}`
}
let horaAtual = setInterval(horario,1000);

dia.map((el,i)=>{
    if(diaAtual == i+1){
        el.style.backgroundColor = 'skyblue'
        el.style.color = 'black'
    }else{
        el.style.backgroundColor = 'lightgray'
    }
})
const contador = document.querySelector('.contador');




