function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro();
const fiat = new Carro();

function segundoCarro(marca, precoInicial) {
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new segundoCarro('Mazda', 20000);

function Dom(seletor) {
    this.elemento = function () {
        return document.querySelector(seletor);
    },

        this.ativar = function (classe) {
            this.elemento().classList.add(classe);
        }
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
//lastLi.ativar('ativar');

// Transformando o objeto abaixo em Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(nome + ' deu 1, 2 passos')
    }
}

// Criando as seguintes pessoas: João - 29 anos, Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 29);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Criando uma Constructor Function (Dom), para manipulação de listas de elementos do DOM
function DomElements(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }

    this.removeClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const itensLista = new DomElements('li');
const lista = new DomElements('ul');

itensLista.addClass('item-lista');
lista.addClass('lista-desordenada');

itensLista.removeClass('ativo');
lista.removeClass('ativo');