// Carregamento os elementos do DOM

const cepInput = document.querySelector('.cep__input')
const thenButton = document.querySelector('.then__button')
const asyncButton = document.querySelector('.async__button')

// Pegando elementos para por o resultado
const campoCep = document.querySelector('#cep-result')
const campoLogradouro = document.querySelector('#logradouro-result')
const campoBairro = document.querySelector('#bairro-result')
const campoCidade = document.querySelector('#cidade-result')
const campoEstado = document.querySelector('#estado-result')
const campoErroMensagem = document.querySelector('.error__message')
const campoErro = document.querySelector('.cep__error')

// URL API 
URL_BASE = 'https://viacep.com.br/ws/'


function obterCep(){
    return cepInput.value.trim()
}

const validarCampos = () => {
    const cep = obterCep()
    
    // validando se o cep está vazio
    if (cepInput.value === '') {
        campoErro.style.display = 'block'
        campoErroMensagem.textContent = ('O campo de CEP não pode estar vazio')

    }
    // validando se o cep tem 8 caracteres
    else if (cep.length !== 8) {
        campoErro.style.display = 'block'
        campoErroMensagem.textContent = ('O CEP deve conter 8 caracteres')
    }
    // Verificando se é um numero
    else if (isNaN(cep)) {
        campoErro.style.display = 'block'
        campoErroMensagem.textContent = ('O CEP deve conter apenas números')
    }
    else {
        return true
    }
}


// =================== Funcao para pesquisar com await e async ======================
const pesquisarCepAwait = async () => {
    const cep = obterCep()

    if (validarCampos(cep)) {
        const respostaApi = await fetch(`${URL_BASE}/${cep}/json`).then()
        // Espera ele retornar a resposta e dps eu coloco pra json, no caso pra dar certo no javascrpt
        const respostaJson = await respostaApi.json()

        // variaveis para retornar o resultado do json
        const respostaCep = respostaJson.cep
        const respostaLogradouro = respostaJson.logradouro
        const respostaBairro = respostaJson.bairro
        const respostaCidade = respostaJson.localidade
        const respostaEstado = respostaJson.uf

        // Passando tudo em forma de objeto para retornar tudo de uma vez só
        return { respostaCep, respostaLogradouro, respostaBairro, respostaCidade, respostaEstado }
    } else {
        return false
    }

}


//================== Função para pesquisar com o then ================

const pesquisarCepThen = () => {
    const cep = obterCep()
    if (validarCampos(cep)) {
        const url = `${URL_BASE}/${cep}/json`;
        return fetch(url)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error('Erro na Requisição');
                }
                return resposta.json();
                

                
            })
            .then(dados => {
                return dados

            })
            .catch(error => {
                console.warn('Houve um problema:', error.message);
            });
    } else {return false}
    

}



// Eventos nos botoes

try {
    asyncButton.addEventListener('click', () => {
        // Vai transformar tudo o que veio do rtorno da funcao e transformar num objeto, "resposta"
        pesquisarCepAwait(cepInput.value).then(resposta => {
            campoCep.textContent = resposta.respostaCep
            campoLogradouro.textContent = resposta.respostaLogradouro
            campoBairro.textContent = resposta.respostaBairro
            campoCidade.textContent = resposta.respostaCidade
            campoEstado.textContent = resposta.respostaEstado
        })
    })

    thenButton.addEventListener('click', () => {
        pesquisarCepThen(cepInput.value).then(resultadoPesquisa => {
            campoCep.textContent = resultadoPesquisa.cep
            campoLogradouro.textContent = resultadoPesquisa.logradouro
            campoBairro.textContent = resultadoPesquisa.bairro
            campoCidade.textContent = resultadoPesquisa.localidade
            campoEstado.textContent = resultadoPesquisa.uf
        })

    })

}

catch (erro) {
    console.warn(erro)
}
