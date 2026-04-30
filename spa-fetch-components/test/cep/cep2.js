
const inputCep = document.querySelector('.cep__input'); 
const botaoThen = document.querySelector('.then__button')

const pesquisarCepThen = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error('Erro na Requisição');
        }

        return resposta.json(); 
    })
    .then(dados => {
        console.log(dados);
    
    })
    .catch(error => {
        console.warn('Houve um problema:', error.message);
    });
}

botaoThen.addEventListener('click', () => {
    valorCep = inputCep.value
    pesquisarCepThen(valorCep)
})

