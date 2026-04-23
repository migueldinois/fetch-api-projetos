import { iniciarMenu } from '../components/menu.js';

const carregarComponente = async (componente, container) => {
    try {
        // await para esperar a resposta do fetch, e depois converte a resposta para texto que é o html do componente
        const resposta = await fetch(`./components/${componente}.html`);
        // pega o html do componente 
        const htmlDoComponente = await resposta.text();
        // e insere no container
        container.innerHTML = htmlDoComponente;
    }
    catch (error) {
        console.error(`Erro ao carregar o componente ${componente}:`, error);
    }
}

carregarComponente('menu', document.querySelector('[data-componente="menu"]')).then(() => {
    iniciarMenu();
});