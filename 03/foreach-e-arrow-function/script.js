const imagens = document.querySelectorAll('img');
//console.log(imagens);

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

/*titulosArray.forEach(function (item) {
    console.log(item)
});*/

/*let i = 0;
imagens.forEach(() => console.log(i++))*/

// Mostrando cada parágrafo do site no console
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
})

// Mostrando o texto dos paragráfos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
})

// Corrigindo os erros abaixo
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index)
})

let i = 0;
imgs.forEach(() => {
    console.log(i++)
})

imgs.forEach(() => i++)

console.log(i);