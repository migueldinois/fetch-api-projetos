export const iniciarMenu = () => {
    const menus = document.querySelectorAll('[data-menu]');

    menus.forEach((menu) => {
        const botao = menu.querySelector('.menu__botao');

        const verificarAtivo = (elemento) => {
            return elemento.classList.contains('active');
        };

        const toggleMenu = () => {
            menu.classList.toggle('active');
            // verifica se o menu tem a classe active para saber o estado que ela esta
            const ativo = verificarAtivo(menu);
            // atualiza o atributo aria-expanded com base no estado do menu
            botao.setAttribute('aria-expanded', ativo);
            //  se tem a classe é pq está ativo, se não tem a classe é pq não está ativo, então o operador ternário é mt bom pra isso
            botao.setAttribute('aria-label', ativo ? 'Fechar Menu' : 'Abrir Menu');
        }

        const fecharComEsc = (event) => {
            // verifica se a tecla pressionada é o esc e se o menu está ativo
            const isEsc = event.key === 'Escape';

            // verifica se o menu tem a classe active para saber o estado que ela esta
            const ativo = verificarAtivo(menu);
            // se a tecla é esc e o menu está ativo, fecha o menu
            if (isEsc && ativo) {
                menu.classList.remove('active');
                botao.setAttribute('aria-expanded', false);
                botao.setAttribute('aria-label', 'Abrir Menu');
                botao.focus();
            }
            console.log(event.key);


        }
        botao.addEventListener('pointerdown', toggleMenu);
        // Evento para fechar com o esc (key down é tipo "botão que volta" no caso o esc)
        document.addEventListener('keydown', fecharComEsc);

    });
}


