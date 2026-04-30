// Carregamento os elementos do DOM

const cep__input = document.querySelector('.cep__input')
const then__button = document.querySelector('.then__button')
const async__button = document.querySelector('.async__button')

const pesquisarCep = async (cep) => {

    const respostaApi = await fetch(`viacep.com.br/ws/${cep}/json/`)
}