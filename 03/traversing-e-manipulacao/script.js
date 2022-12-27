const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

console.log(animaisLista.innerHTML);
//h1.innerHTML = '<h1>Novo Título</h1>';

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child').innerHTML);
console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//contato.insertBefore(animais, mapa);
//contato.replaceChild(mapa, titulo);

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

//mapa.appendChild(novoh1);

//console.log(novoh1);

const tituloPagina = document.querySelector('h1');
const faq = document.querySelector('.faq');
const h1Clone = h1.cloneNode(true);

//faq.appendChild(h1Clone);

// Duplicando o menu e adicionando ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecionando o primeiro dt da dl do Faq
const faqSite = document.querySelector('.faq');
const primeiroDt = faqSite.querySelector('dt');

console.log(primeiroDt);

// Selecionando o dd referente ao primeiro dt
const proximoDd = primeiroDt.nextElementSibling;

console.log(proximoDd);

// Substituindo o conteúdo HTML de .faq pelo de .animais
faq.innerHTML = animais.innerHTML;