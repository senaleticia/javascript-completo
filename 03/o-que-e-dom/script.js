const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/03/o-que-e-dom/') {
    console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log('Você clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);

// Retornando a URL da página atual utilizando o objeto Window
const url = window.location.href;
console.log(url);

// Selecionando o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');

// Retornando a linguagem navegador
const idioma = window.navigator.language;
console.log(idioma);

// Retornando a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);