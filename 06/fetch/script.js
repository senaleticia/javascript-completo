const imagem = fetch('https://viacep.com.br/ws/06604190/json');

const div = document.createElement('div');

imagem.then(response => {
    console.log(response.type);
    if (response.status == 404) {
        console.log('Página não encontrada');
    }
});

/* Criando um formulário onde o usuário vai digitar o cep e o endereço completado é retornardo ao clicar no botão "Buscar"
Utilizando a API 'https://viacep.com.br/ws/${CEP}/json'*/
const inputCep = document.getElementById('cep');
const btnCep = document.querySelector('#btn-cep');
const resultadoCep = document.querySelector('.resultado-cep');

function handleClick(event) {
    event.preventDefault();

    const cep = inputCep.value;
    buscarCep(cep);
}

function buscarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.text()).then(body => {
        resultadoCep.innerText = body;
    });
}

//buscarCep('06604190');

inputCep.addEventListener('keyup', handleClick);

/* Retornando no DOM o valor da compra de bitcoin e reais, utilizando a API 'https://blockchain.info/ticker'.
Valor atualizado a cada 30s*/
const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
    fetch('https://blockchain.info/ticker').then(response => response.json()).then(btcJson => {
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    })
}

setInterval(fetchBtc, 3000);

fetchBtc();

// Retornando uma piada randomica do chucknorris, com a API 'https://api.chucknorris.io/jokes/random', sempre que clicar no botão 'próximo'
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json()).then(piada => {
        paragrafoPiada.innerText = piada.value;
    })
}

btnProxima.addEventListener('click', puxarPiada);