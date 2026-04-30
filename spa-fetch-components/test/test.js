// Testes com exemplos w3 schools

// OK

// Lançar uma excessão (erro personalizado)
let isActive = false
console.log(isActive ? "Está Ativado" : "Está Desativado")

// Criar uma funcao geradora de erro
const gerarErro = (tipo, codigo, mensagem) => {
    let erro = new Error(mensagem)
    erro.tipo = tipo
    erro.codigo = codigo
    return erro
}



// =-===================================
// Saldo e compra de produyto

            // <li class="name__description"></li>
            // <li class="message__description"></li>
            // <li class="code__description"></li>
            // <li class="type__description"></li>
            // <li class="stack__description"></li>

const containerErro = document.querySelector('.erro__container')
const campoNome = document.querySelector('.name__description')
const campoMensagem = document.querySelector('.message__description')
const campoCodigo = document.querySelector('.code__description')
const campoTipo = document.querySelector('.type__description')
const campoStack = document.querySelector('.stack__description')


try {
    let saldo = 20 
    let produto = 103
    if (saldo < produto){
        throw gerarErro('VALIDACAO', 1002, 'Você não tem saldo suficiente para adquirir esse produto')
    }
}
catch (erro) {
    containerErro.style.display = 'block'
    containerErro.classList.add('erro-ativo');
    campoNome.textContent = `Nome do erro: ${erro.name}`
    campoMensagem.textContent = `Mensagem: ${erro.message}`
    campoCodigo.textContent = `Codigo: ${erro.codigo}`
    campoTipo.textContent = `Tipo: ${erro.tipo}`
    campoStack.textContent = `Stack: ${erro.stack}`
}


// =======================================================

//  Idade
// try {
//     let idade = -5

//     if (idade < 0) { 
//         throw gerarErro('VALIDAÇÃO', 1001, 'Idade Inválida')
//     }

    
// }
// catch (erro) {
//     let text = `
//         <strong>Nome do erro: </strong> ${erro.name} <br/>
//         <strong>Mensagem: </strong> ${erro.message} <br/>
//         <strong>Codigo: </strong> ${erro.codigo} <br/>
//         <strong>Tipo: </strong> ${erro.tipo} <br/>
//         <strong>Stack: </strong> ${erro.stack} <br/>
//     `

//     document.body.innerHTML = text
// }

//  ===========================================================




// const carregarComponente = async (componente, container) => {
//     try {
//         // await para esperar a resposta do fetch, e depois converte a resposta para texto que é o html do componente
//         const resposta = await fetch(`./${componente}.html`);

//         if (!resposta.ok) {
//             throw new Error('Erro ao carregar componente');
//         }

//         // pega o html do componente e transforma em texto
//         const htmlDoComponente = await resposta.text();
//         // e insere no container
//         container.innerHTML = htmlDoComponente + '<p>Esse componente foi carregado com fetch</p>';
//     }
//     catch (erro) {
//         console.warn(erro);
//     }
// }


// /* Testando a função: carregarComponente
// 01 - Criar o componente que será injetado FEITO
// 02 - Criar o elemento que irá receber o componente (test.html) FEITO
// 03 - Capturar o elemento que irá receber o componente( no test.html) FEITO
// 04 - Utilizar a função para carregar o componente FEITO */
// const containerComponents = document.querySelector('.components__test')
// carregarComponente('c-test', containerComponents)