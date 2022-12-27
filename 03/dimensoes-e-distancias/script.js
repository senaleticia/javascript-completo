const animaisLista = document.querySelector('.animais-lista');
const height = animaisLista.scrollHeight;
const animaisTop = animaisLista.offsetTop;

console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

console.log(h2Left);

const h2Rect = primeiroH2.getBoundingClientRect();
console.log(h2Rect.top);

if (h2Rect < 0) {
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset
);

const small = window.matchMedia('(max-width: 768px)').matches;

if (small) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário desktop');
}

console.log(small);

// Verificando a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retornando a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;

    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });

    console.log(soma);
}

window.onload = function () {
    somaImagens();
}

/* Verificando se os links da página possuem o mínimo recomendado para as telas utilizadas com o dedo 
(48x48, de acordo com o Google)*/
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade');
    } else {
        console.log(link, 'Não possui boa acessibilidade');
    }
})

// Adicionando a classe 'menu-mobile', caso o browser seja menor que 720px
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}