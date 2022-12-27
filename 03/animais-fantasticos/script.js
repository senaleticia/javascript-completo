const animais = document.getElementById('animais');
//console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
//console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
//console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelector('.grid-section');

// Adicionando classe em um elemento
primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

// gridSectionNode.forEach(function (item, index) {
//     console.log(item, index);
// });

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
    //console.log(item);
});

// Retornando no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);

// Retornando no console apenas imagens que começam com "imagem"
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecionando todos os href que começam com #
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecionando o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

// Selecionando o último p do site
const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[24]);