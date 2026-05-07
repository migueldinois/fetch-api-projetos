
// Capturando elementos do DOM

const estadosInput = document.querySelector('#estados') 
const municipiosInput = document.querySelector('#municipios')

URL_BASE = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' 

async function atualizarMunicipios(){
    // Validação para deixar o input liberado
    if(estadosInput.value !== ''){
        municipiosInput.disabled = false
    } else {
        municipiosInput.disabled = true
    }

    let valorUF = estadosInput.value
    const respostaApi = await fetch(`${URL_BASE}/${valorUF}/municipios`)
    if (!respostaApi.ok){
        throw new Error('Erro na consula dos municipios')
    }
    const respostaJson = await respostaApi.json()

    // Limpando todos os options para nao ficar com cidades erradas em estados que nao existe]
    municipiosInput.innerHTML = '<option value="">Selecione um estado</option>'
    


    respostaJson.forEach(municipio => {
        // Criando uma option a cada item 
        const option = document.createElement('option');
        // definindo os valores
        option.value = municipio.nome;
        option.textContent = municipio.nome;
        // criando filho pro select
        municipiosInput.appendChild(option);
    });
}

estadosInput.addEventListener('change', atualizarMunicipios)