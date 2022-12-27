var pessoa = {
    nome: 'Letícia',
    idade: 21
};

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.area(8));
console.log(quadrado.perimetro(8));
console.log(Math.E);

var menu = {
    width: 500,
    height: 40,
    backgroundColor: 'red',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.color = 'purple';

menu.esconder = function () {
    console.log('Escondido');
}

var bg = menu.backgroundColor;

// Criando um objeto com meus dados pessoais
var meusDados = {
    nome: 'Letícia',
    sobrenome: 'Sena',
    idade: 21,
    dataNascimento: '31/07/2001',
    altura: 1.53,
}

console.log(meusDados);

// Criando um método que mostre meu nome completo, no objeto anterior
meusDados.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

console.log(meusDados.nomeCompleto());

// Modificando o valor da propriedade "preco" para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro);

// Criando um objeto que represente um labrador preto, de 10 anos e late ao ver um homem
var cachorro = {
    raca: 'Labrador',
    idade: 10,
    cor: 'preto',
    latir(pessoa) {
        if (pessoa == 'homem') {
            return 'Au au';
        } else {
            return 'Silêncio';
        }
    }
}