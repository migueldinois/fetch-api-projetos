import { iniciarMenu } from '../components/menu.js';

const carregarComponente = async (componente, container) => {
    try {
        // await para esperar a resposta do fetch, e depois converte a resposta para texto que é o html do componente
        const resposta = await fetch(`./components/${componente}.html`);

        if (!resposta.ok) {
            throw new Error(`Erro ao carregar componente ${componente} status: ${resposta.status}`);
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

const iniciarLinks = () => {
    const conteudo = document.querySelector('[data-conteudo]')
    let links = document.querySelectorAll('[data-link]');

    links.forEach(link => {
        //  se eu usei uma async aq em cima ele só vai carregar o componente depois que o fetch tiver terminado, 
        // e só depois disso ele vai adicionar o evento de click, ou seja, o evento de click só vai ser adicionado 
        // depois que o componente tiver sido carregado, entao vou usar o await para esperar o carregamento do 
        // componente antes de adicionar o evento de click

        link.addEventListener('click', async (event) => {
            event.preventDefault()
            // dataset é uma forma de acessar os atributos personalizados do html, nesse caso o data-link
            const pagina = link.dataset.link;
            const menu = document.querySelector('[data-menu]')
            const botao = document.querySelector('.menu__botao')
            if (menu.classList.contains('active')) {
                menu.classList.remove('active')
                botao.classList.remove('aria-expanded', false)
                botao.setAttribute('aria-expanded', 'Abrir menu')

            }
            await carregarComponente(`./pages/${pagina}.html`, conteudo)
        })
    });
}
