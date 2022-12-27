const pessoa = new Object({
    nome: 'Letícia'
})

console.log(pessoa);

/*const carro = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro).init('Honda');
const ferrari = Object.create(carro).init('Ferrari');

console.log(honda.acelerar());
console.log(ferrari.buzinar());

const funcaoAutomovel = {
    acelerar() {
        return 'vrum!';
    },
    buzinar() {
        return 'bi bi!'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

Object.assign(moto, funcaoAutomovel);*/

const moto = {
    //value: 2,
    capacete: true
}

Object.defineProperties(moto, {
    rodas: {
        enumerable: true,
        get: function () {
            return this._rodas;
        },
        set: function (valor) {
            this._rodas = valor * 4 + ' rodas no total';
        }
    }
})

moto.rodas = 4;

console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

Object.getOwnPropertyNames(Array.prototype);

/*const frutas = ['Abacaxi', 'Laranja'];
console.log(Object.getPrototypeOf(frutas));*/

const frutas1 = ['Abacaxi', 'Limão'];
const frutas2 = ['Abacaxi', 'Limão'];

const novaFruta = frutas1;
novaFruta[0] = 'Laranja';

console.log(frutas1);
console.log(Object.is(frutas1, novaFruta));

const carro = {
    marca: 'Ford',
    ano: 2018
}

Object.seal(carro);
Object.freeze(carro);
console.log(Object.isSealed(carro));
console.log(Object.isFrozen(carro));

const frutas = ['Abacaxi', 'Laranja'];
const frase = "Alô amigos!"

const somar = function (a, b) {
    return a + b;
}

console.log(carro.toString());

console.log(Object.prototype.toString.call(frutas));

// Criando uma função que verifique corretamente o tipo de dado
function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
}

console.log(verificarDado('String'));

// Criando um objeto quadrado com a propriedade lados e deixando-a imutável
const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true
    }
})

// Prevenindo qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);

// Listando o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));