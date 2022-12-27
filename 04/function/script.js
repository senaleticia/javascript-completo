const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar.prototype);

function darOi(nome) {
    console.log('Oi pra você, ' + nome);
}

darOi.call({}, 'Letícia');

window.marca = 'Ford';
window.ano = '2018';

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro.call({ marca: 'Fiat', ano: '2010' });

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (carro) => {
    console.log(carro)
});

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    console.log(this);
    this.element.classList.add(classe);
}

/*const ul = new Dom('ul');
const li = { element: document.querySelector('li') }

ul.ativo.call(li, 'ativo');*/

const frutas = ['Abacaxi', 'Limão', 'Laranja'];

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3
}

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo');
})

console.log(filtro());

console.log(li)

const numeros = [33, 232, 33, 434, 54, 5424, 4];
const $ = document.querySelectorAll.bind(document, 'li');

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}km em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(90, 10));

// Utilizando reduce para retornar a soma total de caracteres dos parágrafos
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, paragrafo) => {
    console.log(paragrafo.innerText.length);
    return acumulador + paragrafo.innerText.length;
}, 0)

console.log(paragrafos);
console.log(totalCaracteres);

// Criando uma função que retorne novos elementos html, com os seguintes parâmetros: tag, classe e conteúdo
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarElemento('li', 'item-lista', 'Conteúdo 1'));

/* Criando uma função utilizando a anterior como base. A função deverá sempre criar um h1 com a classe 'titulo', 
e o parâmetro conteúdo segue dinâmico*/
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
const cantorBom = h1Titulo('Luan Santana');

console.log(cantorBom);
console.log(h1Titulo('Músicas para ouvir enquanto desenvolve'));