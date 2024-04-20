
const espelho = document.querySelector('.espelho')
const lista = document.querySelector('.lista')
const btnMostrar = document.querySelector('.mostrar')
const btnEnviar = document.querySelector('.btnEnviar')
const body = document.querySelector('body')
let tbody = document.querySelector('tbody')
const input = [...document.querySelectorAll('input')]
const dadosDigitados = [...document.querySelectorAll('p')]
const atualizarDados = document.querySelector('.atualizarDados')
const listagem = document.querySelector('.listagem')
const listaAtualizaCadastro = [...document.querySelectorAll('h5')]

const primeiroNome_check = document.querySelector('.primeiroNome_check')
const sobrenome_check = document.querySelector('.sobrenome_check')
const idade_check = document.querySelector('.idade_check')
const profissao_check = document.querySelector('.profissao_check')
const cidade_check = document.querySelector('.cidade_check')
const estado_check = document.querySelector('.estado_check')
const abrirAtualizarLista = document.querySelector('.abrirAtualizarLista')
let contId = 0
let indiceDeAtualização;
let indiceDeRemocao = []
let cadastro = []
let cadastrado;
let arrBtnAtualizar = []
let arrBtnDeletar = []
let imgAtualizar;
let arrTeste = []
let arrTeste2 = []
let contIdAux;



// const array = [1, 2, 3, 4, 5];
// const index = array.indexOf(4);
// if (index > -1) {
//   array.splice(index, 1);
// }
// console.log(array);
// console.log(index)


   
function limpaDadosDigitados(){
    dadosDigitados.forEach(element => {
        element.innerText = ''
    });
}

function limparInputs(){
    input.forEach((el)=>{
        el.value = ''
    })
}
btnMostrar.addEventListener('click',()=>{
const nome = document.querySelector('.nome')
const sobrenome = document.querySelector('.sobrenome')
const idade = document.querySelector('.idade')
const profissao = document.querySelector('.profissao')
const cidade = document.querySelector('.cidade')
const estado = document.querySelector('.estado')
// contId++
contId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(contId)
// console.log(contIdAux)
    cadastrado = {
        Id: contId,
        Nome: nome.value,
        Sobrenome: sobrenome.value,
        Idade: idade.value,
        Profissao: profissao.value,
        Cidade: cidade.value,
        Estado: estado.value
    }
    dadosDigitados[0].innerHTML = cadastrado.Nome
    dadosDigitados[1].innerText = cadastrado.Sobrenome
    dadosDigitados[2].innerText = cadastrado.Idade
    dadosDigitados[3].innerText = cadastrado.Profissao
    dadosDigitados[4].innerText = cadastrado.Cidade
    dadosDigitados[5].innerText = cadastrado.Estado
    limparInputs()
    
})
let arrTdNomeSobrenome = []
let arrTdIdade = []
let arrTdProfissao = []
let arrTdCidade = []
let arrTdEstado = []


function criarLista(){
    cadastro.push(cadastrado)
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    
    indiceDeRemocao.push(tr)
    console.log(indiceDeRemocao)
    const id = document.createElement('td')
    tr.appendChild(id)
    id.style.textAlign = 'center'
    for(var c in cadastro){
        id.textContent = cadastro[c].Id
    }
    const nomeLista = document.createElement('td')
    tr.appendChild(nomeLista)
    
    arrTdNomeSobrenome.push(nomeLista)
    for(var c in cadastro){
        nomeLista.textContent = `${cadastro[c].Nome} ${cadastro[c].Sobrenome}`
    }
    nomeLista.style.textAlign = 'center'
    const idadeLista = document.createElement('td')
    tr.appendChild(idadeLista)
    
    arrTdIdade.push(idadeLista)
    for(var c in cadastro){
        idadeLista.textContent = cadastro[c].Idade, cadastro[c].Profissao
    }
    
    idadeLista.style.textAlign = 'center'
    const profissaoLista = document.createElement('td')
    tr.appendChild(profissaoLista)
    
    arrTdProfissao.push(profissaoLista)
    for(var c in cadastro){
        profissaoLista.textContent = cadastro[c].Profissao
    }
    
    profissaoLista.style.textAlign = 'center'
    const cidadeLista = document.createElement('td')
    tr.appendChild(cidadeLista)
   
    arrTdCidade.push(cidadeLista)
    for(var c in cadastro){
        cidadeLista.textContent = cadastro[c].Cidade
    }
   
    cidadeLista.style.textAlign = 'center'
    const estadoLista = document.createElement('td')
    tr.appendChild(estadoLista)
    
    arrTdEstado.push(estadoLista)
    estadoLista.style.textAlign = 'center'
    for(var c in cadastro){
        estadoLista.textContent = cadastro[c].Estado
    }

    // cadastro.push(cadastrado)
    // let tr = document.createElement('tr')
    // tbody.appendChild(tr)
    // arrTeste2.push(tr)
    //     for(var c= 0; c<=5; c++){
    //         let td = document.createElement('td')
    //         tr.appendChild(td)
    //         td.style.textAlign = 'center'
    //         arrTeste.push(td)
    //     }
        
    //       for(var c in cadastro){
    //         arrTeste[0].innerText = cadastro[c].Id
    //         arrTeste[1].innerText = `${cadastro[c].Nome} ` + `${cadastro[c].Sobrenome}`
    //         arrTeste[2].innerText = cadastro[c].Idade
    //         arrTeste[3].innerText = cadastro[c].Profissao
    //         arrTeste[4].innerText = cadastro[c].Cidade
    //         arrTeste[5].innerText = cadastro[c].Estado
            
    //       }
            
    //     for(var c in cadastrado){
    //         console.log(cadastrado[c].value)
    //     }
        
        const atualizar = document.createElement('td')
        tr.appendChild(atualizar)
        atualizar.style.textAlign = 'center'
        imgAtualizar = document.createElement('img')
        atualizar.appendChild(imgAtualizar)
        imgAtualizar.style.width = '25px'
        imgAtualizar.style.cursor = 'pointer'
        arrBtnAtualizar.push(imgAtualizar)
        arrBtnAtualizar.map((el,i)=>{
            el.src = 'imagens/ios-8-System-Update-icon_43809.png'
            el.addEventListener('click',()=>{
                indiceDeAtualização = i
                console.log(indiceDeAtualização)
                abrirAtualizarLista.style.display = 'block'
                listaAtualizaCadastro[0].innerHTML = `Id: ${cadastro[i].Id}`
                listaAtualizaCadastro[1].innerHTML = `Nome: ${cadastro[i].Nome}`
                listaAtualizaCadastro[2].innerHTML = `Sobrenome: ${cadastro[i].Sobrenome}`
                listaAtualizaCadastro[3].innerHTML = `Idade: ${cadastro[i].Idade}`
                listaAtualizaCadastro[4].innerHTML = `Profissao: ${cadastro[i].Profissao}`
                listaAtualizaCadastro[5].innerHTML = `Cidade: ${cadastro[i].Cidade}`
                listaAtualizaCadastro[6].innerHTML = `Estado: ${cadastro[i].Estado}`
            })
            
        })
        const deletar = document.createElement('td')
        tr.appendChild(deletar)
        const imgDeletar = document.createElement('img')
        deletar.appendChild(imgDeletar)
        deletar.style.textAlign = 'center'
        imgDeletar.style.width = '25px'
        imgDeletar.style.cursor = 'pointer'
        arrBtnDeletar.push(imgDeletar)
        arrBtnDeletar.map((el,ind)=>{
            el.src = "imagens/delete_delete_exit_1577.png"
            el.addEventListener('click', ()=>{
                delete cadastro[ind]
                indiceDeRemocao[ind].remove()
                console.log(ind)
                console.log(cadastro)
            })
        })
}
// var teste = [1, 2, 3, 4];
// teste.splice(0,2);
// console.log(teste)

btnEnviar.addEventListener('click',(i)=>{
    contIdAux = contId
    contId = 0
    if(contId == contIdAux){
        alert('Cadastro vazio!!! Preencha o campo de Cadastro.')
    }else{
        criarLista()
        limpaDadosDigitados()
    }
    
})

var teste = [1, 2, 3, 4];
teste.splice(0,2);
console.log(teste)

var teste1 = [{n0:1}, {n1:2}, {n2:3}]
teste1.slice(0,2)

teste1.slice(delete teste1[0])

console.log(teste1)



let teste3 = {
    nome: 'xx',
    idade:29
}
delete teste3.nome
console.log(teste3)



    
const campoAtualizar = [...document.querySelectorAll('.campoAtualizar')]
const btnAbrir = [...document.querySelectorAll('.btnAbrir')]

function fecharCampoAtualizar(){
    campoAtualizar.forEach((el)=>{
        el.classList.add('fecharCampo')
    })
}
btnAbrir[0].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[0].classList.remove('fecharCampo')
})
btnAbrir[1].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[1].classList.remove('fecharCampo')
})

btnAbrir[2].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[2].classList.remove('fecharCampo')
})

btnAbrir[3].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[3].classList.remove('fecharCampo')
})

btnAbrir[4].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[4].classList.remove('fecharCampo')
})

btnAbrir[5].addEventListener('click',()=>{
    fecharCampoAtualizar()
    campoAtualizar[5].classList.remove('fecharCampo')
})

let atualizarPn = document.querySelector('.atualizarPn')
let btnPn = document.querySelector('.btnPn')
btnPn.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Nome = atualizarPn.value
    listaAtualizaCadastro[1].innerHTML = `Nome: ${cadastro[indiceDeAtualização].Nome}`
    arrTdNomeSobrenome[indiceDeAtualização].innerHTML = `${cadastro[indiceDeAtualização].Nome} ${cadastro[indiceDeAtualização].Sobrenome}`
    limparInputs()
})

let atualizarSobrenome = document.querySelector('.atualizarSobrenome')
let btnSobrenome = document.querySelector('.btnSobrenome')
btnSobrenome.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Sobrenome = atualizarSobrenome.value
    listaAtualizaCadastro[2].innerHTML = `Sobrenome: ${cadastro[indiceDeAtualização].Sobrenome}`
    arrTdNomeSobrenome[indiceDeAtualização].innerHTML = `${cadastro[indiceDeAtualização].Nome} ${cadastro[indiceDeAtualização].Sobrenome}`
    limparInputs()
})

let atualizarIdade = document.querySelector('.atualizarIdade')
let btnIdade = document.querySelector('.btnIdade')
btnIdade.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Idade = atualizarIdade.value
    listaAtualizaCadastro[3].innerHTML = `Idade: ${cadastro[indiceDeAtualização].Idade}`
    arrTdIdade[indiceDeAtualização].innerHTML = cadastro[indiceDeAtualização].Idade 
    limparInputs()
})

const atualizarProfissao = document.querySelector('.atualizarProfissao')
const btnProfissao = document.querySelector('.btnProfissao')
btnProfissao.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Profissao = atualizarProfissao.value
    listaAtualizaCadastro[4].innerHTML = `Profissao: ${cadastro[indiceDeAtualização].Profissao}`
    arrTdProfissao[indiceDeAtualização].innerHTML = cadastro[indiceDeAtualização].Profissao
    limparInputs()
})

const atualizarCidade = document.querySelector('.atualizarCidade')
const btnCidade = document.querySelector('.btnCidade')
btnCidade.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Cidade = atualizarCidade.value
    listaAtualizaCadastro[5].innerHTML = `Cidade: ${cadastro[indiceDeAtualização].Cidade}`
    arrTdCidade[indiceDeAtualização].innerHTML = cadastro[indiceDeAtualização].Cidade
    limparInputs()
})

const atualizarEstado = document.querySelector('.atualizarEstado')
const btnEstado = document.querySelector('.btnEstado')
btnEstado.addEventListener('click',()=>{
    cadastro[indiceDeAtualização].Estado = atualizarEstado.value
    listaAtualizaCadastro[6].innerHTML = `Estado: ${cadastro[indiceDeAtualização].Estado}`
    arrTdEstado[indiceDeAtualização].innerHTML = cadastro[indiceDeAtualização].Estado
    limparInputs()
})


      




