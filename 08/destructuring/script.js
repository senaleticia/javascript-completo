const carro = {
    marca: "Honda",
    ano: 2018
}

const { marca, ano } = carro;

console.log(marca);
console.log(ano);

const cliente = {
    nome: "Letícia",
    compras: 10
}

const { nome } = cliente;

const frutas = ['Abacaxi', 'Laranja', 'Limão'];
const [primeira, segunda, terceira] = frutas;

console.log(terceira);

function handleKeyboard({ key, keyCode }) {
    console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);

// Extraindo o background-color, color e margin do btn
const btn = document.querySelector('button');
const btnStyle = getComputedStyle(btn);

const { backgroundColor, margin, color } = btnStyle;

console.log(backgroundColor);
console.log(margin);
console.log(color);

// Trocando os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log("Curso ativo: " + cursoAtivo);
console.log("Curso inativo: " + cursoInativo);

// Corrigindo o erro do código abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const { cor: bobCor } = cachorro;