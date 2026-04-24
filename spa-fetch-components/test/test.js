let isActive = false
console.log(isActive ? "Está Ativado" : "Está Desativado")


try {

    }
catch(erro){
    let text = `
        <strong>Nome do erro: </strong> ${erro.name} <br/>
        <strong>Mensagem: </strong> ${erro.message} <br/>
        <strong>Stack: </strong> ${erro.stack} <br/>
    `

    document.body.innerHTML = text


}



const containerComponents = document.querySelector('.components__test')

const carregarComponente = async (componente, container) => {
    try {
        // await para esperar a resposta do fetch, e depois converte a resposta para texto que é o html do componente
        const resposta = await fetch(`./${componente}.html`);

        if (!resposta.ok) {
            throw new Error(`Erro ao carregar componente: ${componente}`);
        }

        // pega o html do componente 
        const htmlDoComponente = await resposta.text();
        // e insere no container
        container.innerHTML = htmlDoComponente;
    }
    catch (error) {
        console.error(`Erro ao carregar o componente ${componente}:`, error);
    }
}


/* Testando a função: carregarComponente
01 - Criar o componente que será injetado FEITO
02 - Criar o elemento que irá receber o componente (test.html) FEITO
03 - Capturar o elemento que irá receber o componente( no test.html) FEITO
04 - Utilizar a função para carregar o componente FEITO */ 

carregarComponente('c-test', containerComponents)