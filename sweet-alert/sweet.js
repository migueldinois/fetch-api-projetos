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
        text: "Exemplo de alerta de erro",
        footer: "<a href=\"#\">Porque isso aconteceu?</a>"
    });
})

botaoAviso.addEventListener('click', () => {
    Swal.fire({
        title: "Aviso",
        text: "Exemplo de alerta de Aviso",
        icon: "warning"
    });
})

botaoInformacao.addEventListener('click', () => {
    Swal.fire({
        title: "Informação",
        text: "Exemplo de alerta de Informação",
        icon: "info"
    });
})

botaoConfirmacao.addEventListener('click', () => {
    Swal.fire({
        title: "Tem certeza?",
        text: "Não tem como reverter isso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar arquivo",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Deleted!",
            text: "Seu arquivo foi deletado",
            icon: "success"
        });
    });
})

botaoInput.addEventListener('click', () => {
    Swal.fire({
        title: "Escreva seu nome",
        input: "text",
        inputAttributes: { autocapitalize: "off" },
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        showLoaderOnConfirm: true,
    })
})

botaoTimer.addEventListener('click', () => {
    let timerInterval;
    Swal.fire({
        title: "Alerta de timer",
        html: "Esse alerta fecha em: <b></b> Milissegundos.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) console.log("I was closed by the timer");
    });
})