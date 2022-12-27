/*function somar(a, b) {
    return a + b;
}*/

function dividir(a, b) {
    return a / b;
}

const somar = (a, b) => a + b;
const quadrado = a => a * a;

console.log(somar(39, 42));
console.log(quadrado(39));

const instrumento = 'Violão';

(function () {
    const instrumento = 'Guitarra';
    console.log(instrumento);
})()

console.log(instrumento);

// Removendo o erro
const priceNumber = n => n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Criando uma IIFE e isolando o escopo de qualquer código JS
(function () {
    const nome = "Letícia";
    console.log(nome);
})();

// Como utilizar a função abaixo
const active = callback => callback();

active(function () {
    console.log('Teste de Active');
})