function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(4));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(pi);

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(58, 1.53));

function corFavorita(cor) {
    if (cor == 'vermelho') {
        return 'Vermelho é a cor do amor';
    } else if (cor == 'branco') {
        return 'Branco é a cor da paz';
    } else {
        return 'Eu não gosto de cores';
    }
}

addEventListener('click', function () {
    console.log('Clicou!');
});

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor, preencha com um número';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade('60'));

/*var totalPaises = 139;
function faltaVisitar(paisesVisitados) {
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}*/

var profissao = 'Atriz';

function dados() {
    var nome = 'Letícia';
    var idade = 21;

    function outrosDados() {
        var endereco = 'Jandira';
        var idade = 22;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

    return outrosDados();
}

console.log(dados());

// Função para ver se o valor é truthy
function isTruthy(dado) {
    return !!dado;
}

isTruthy();

// Função matemática que retorne o perímetro de um quadrado (soma dos quatro lados do quadrado)
function perimetroQuadrado(lado) {
    return lado * 4;
}

// Função que retorna o nome completo, com dois parâmetros, nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Função que verifica se o número é par
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'O número é par';
    } else {
        return 'O número é ímpar';
    }
}

// Função que mostre o tipo de dado do argumento passado nela
function tipoDeDado(dado) {
    return typeof dado;
}

/* addEventListener é uma função nativa do JavaScript
   o primeiro parâmetro é o evento que ocorre e o segundo o Callback
   utilize essa função para mostrar no console o seu nome completo
   quando o evento 'click' ocorrer.*/

addEventListener('scroll', function () {
    console.log('Letícia da Silva Sena');
})

// Corrigindo o erro da função abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
}

precisoVisitar(20);