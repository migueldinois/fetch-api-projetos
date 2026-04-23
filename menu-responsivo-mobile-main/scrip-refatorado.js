/** 
 * Inicializa um componente de menu mobile.
 * Recebe o elemento como parâmetro para permitir reutilização.
 */
const criarMenu = (menu) => {

  /** Seleciona elementos internos do componente */
  const botao = menu.querySelector('.menu__botao');

  /**
   * Alterna o estado do menu (aberto/fechado)
   * Atualiza atributos de acessibilidade dinamicamente
   */
  const toggleMenu = () => {

    menu.classList.toggle('active');

    const ativo = menu.classList.contains('active');

    botao.setAttribute('aria-expanded', ativo);

    /** Define o rótulo dinamicamente usando operador ternário */
    botao.setAttribute(
      'aria-label',
      ativo ? 'Fechar Menu' : 'Abrir Menu'
    );
  };

  const fecharComEsc = (event) => {

    const isEsc = event.key === 'Escape';
    const ativo = menu.classList.contains('active');

    if (isEsc && ativo) {
      menu.classList.remove('active');

      botao.setAttribute('aria-expanded', false);

      /** Uso de valor direto pois já sabemos o estado */
      botao.setAttribute('aria-label', 'Abrir Menu');

      botao.focus();
    }
  };

  botao.addEventListener('click', toggleMenu);



//  Evento para fechar com o esc (key down é tipo "botão que volta" no caso o esc)
  document.addEventListener('keydown', fecharComEsc);
};

// lista para inializar tudo o que está na past
document.querySelectorAll('[data-menu]').forEach((menu) => criarMenu(menu));