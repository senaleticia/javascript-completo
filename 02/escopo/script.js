var carro = 'fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro();
console.log(carro);

if (false) {
    var mes = 'Setembro';
    console.log(mes);
}

console.log(mes);

var i = 50;

for (let i = 0; i <= 10; i++) {
    console.log(`Número ${i}`)
}

console.log(i * 10);

const semana = 'Quinta';
//semana = 'Sexta';
console.log(semana);

const data = {
    ano: 2022,
    mes: 'Setembro',
}

data.ano = 2021;
data.dia = 01;

// Descobrindo porque o código abaixo tinha erro
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}

// Corrigindo o erro abaixo
const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// Fazendo o valor total retornar 500
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);