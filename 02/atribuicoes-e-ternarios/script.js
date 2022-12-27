var numero = 20;
var segundoNumero = 10;
numero += segundoNumero;

console.log(numero);
console.log(segundoNumero);

var idade = 21;
var podeBeber;
var naoPossuiDiabetes = true;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = false;

if (possuiFaculdade)
    console.log('Esse indivíduo possui faculdade');
else
    console.log('Esse indivíduo não possui faculdade');

// Somando 500 ao valor de scroll abaixo, atribuindo um novo valor a scroll
var scroll = 1000;
scroll += 500;

console.log(scroll);

// Atribuindo true para a variável darCredito, caso o cliente tenha casa e carro, senão, atribuindo false
var possuiCasa = true;
var possuiCarro = false;
var darCredito;

if (possuiCasa && possuiCarro) {
    darCredito = true;
    console.log('Crédito aprovado');
} else {
    darCredito = false;
    console.log('Crédito reprovado');
}