// isNaN & isInteger
console.log(Number.isNaN(6));
console.log(Number.isInteger(23));

// parseFloat & parseInt
console.log(parseFloat('  1245.3698'));
console.log(parseFloat('100.27 reais'));
console.log(parseInt('100.27 reais', 10));
console.log(parseInt(23.87, 10));

const preco = 10.64;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(valor);

console.log(Math.PI);

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

// Retornando um número aleatório entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numAleatorio);

// Retornando o maior número da lista abaixo
const numeros = '4, 5, 20, 28, 9';
const numerosArray = numeros.split(', ');

const numMaior = Math.max(...numerosArray);

// Criando uma função para limpar os preços e retornar os números com os centavos arredondados, e depois, a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'R$ 200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);

    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

limparPreco(listaPrecos[1]);