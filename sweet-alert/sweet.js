// Capturando todos os elementos do DOM

// Botões:

const botaoAlertaBasico = document.getElementById('alertaBasico')
const botaoSucesso = document.getElementById('alertSucesso')
const botaoErro = document.getElementById('alertErro')
const botaoAviso = document.getElementById('alertAviso')
const botaoInformacao = document.getElementById('alertInfo')
const botaoConfirmacao = document.getElementById('alertConfirm')
const botaoInput = document.getElementById('alertInput')
const botaoTimer = document.getElementById('alertTimer')
const botaoContagemRegressiva = document.getElementById('alertContagem')
const botaoHTMLPersonalizado = document.getElementById('alertHtml')



// Eventos

botaoAlertaBasico.addEventListener('click', () => {
    Swal.fire("Exemplo de alerta básico");
})

botaoSucesso.addEventListener('click', () => {
    Swal.fire({
        title: "Alerta de Sucesso",
        text: "Exemplo de alerta de sucesso",
        icon: "success"
    });
})

botaoErro.addEventListener('click', () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href=\"#\">Porque isso aconteceu</a>"
    });
})
