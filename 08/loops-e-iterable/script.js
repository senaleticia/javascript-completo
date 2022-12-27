const frutas = ['Abacaxi', 'Limão', 'Laranja'];
const frase = 'Frase é string, string é frase';

for (const fruta of frutas) {
    console.log(fruta);
}

for (const char of frase) {
    console.log(char);
}

const buttons = document.querySelectorAll('button');
console.log(...buttons);

for (const btn of buttons) {
    btn.style.color = 'red';
}

const carro = {
    marca: 'Honda',
    ano: 2018
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: true
    }
})

for (const chave in carro) {
    console.log(carro[chave]);
}

for (const f in frutas) {
    console.log(f);
}

fetch('https://pokeapi.co/api/v2/pokemon').then(response => console.log(response));

const btnUnico = document.querySelector('button');
const btnStyle = getComputedStyle(btnUnico);

for (const style of btnStyle) {
    console.log(`${style}: ${btnStyle[style]}`);
}

let i = 0;
do {
    console.log(i++);
} while (i <= 5);

// Criando 4 <li> na página usando for...of e adicionando uma classe a cada <li>
const itens = document.querySelectorAll('li');

for (const item of itens) {
    item.classList.add('ativo');
    console.log(item);
}

// Listando todas as propriedades e valores do objeto window com for...in
for (const windowKey in window) {
    console.log(windowKey);
}