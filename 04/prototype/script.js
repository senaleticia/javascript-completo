function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return nome + ' abraçou! Own!'
    }
    this.andar = function () {
        return 'Andou pelo objeto'
    }
}

var obj = {
    nome: 'André',
    idade: 22
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou';
}

const andre = new Pessoa('André', 22);

const pais = "Brasil";
const cidade = new String('São Paulo');

const listaAnimais = ['Raposa', 'Lobo', 'Urso'];

const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);
const segundaListaArray = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 10000,
    andar() {
        return true;
    }
}

// Criando uma função construtora de pessoas
function PessoaObj(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.nomeCompleto = function () {
        return `${nome} ${sobrenome}`;
    }
}

const leticia = new PessoaObj('Letícia', 'Sena', 21);

// Listando os métodos acessados por dados criados com NodeList, HTMLCollection e Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Listando os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Verificando o construtor do dado abaixo
li.hidden.constructor.name; // String