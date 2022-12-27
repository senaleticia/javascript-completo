const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 20000 }], function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[4] = 'Parati';

console.log(carros.length);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const obj = {
    0: 'Letícia',
    1: 'Sena',
    2: 'Desenvolvimeto',
    length: 4
}

const objArray = Array.from(obj);

console.log(arrayLi);
console.log(li);

const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[0].length);

instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos);
console.log(idades);

const carrosLista = ['Ford', 'Fiat', 'Kia'];
carrosLista.unshift('VW', 'Ferrari');
const novoArray = carrosLista.push('Parati', 'Gol');

console.log(carrosLista);
console.log(carrosLista.splice(2, 1, 'Fusca'));
console.log(carrosLista);

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Balas', 0, 2));

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];

transporte1.concat(transporte2);
console.log(transporte1);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'java'];
const cloneLinguagens = linguagens.slice();

console.log(linguagens.pop());
console.log(cloneLinguagens);

let htmlString = "<h2>Titulo Principal</h2>";
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

/* - Removendo o primeiro valor de "comidas" e colocando em uma variável
- Removendo o último valor de "comidas" e colocando em uma variável
- Adicionando "Arroz" ao final do array
- Adicionando "Peixe" e "Batata" ao início do array */
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

/* - Arrumando os estudantes em ordem alfabética
- Invertendo a ordem dos estudantes
- Verificando se Joana faz parte dos estudantes
- Verificando se Juliana também faz parte dos estudantes */
const estudantes = ['Márcio', 'Brenda', 'Joana', 'Kleber', 'Júlia'];

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));

// Substituindo 'section' por 'ul' e 'div' por 'li', utilizando 'split' e 'join'
let htmlText = `<section>
                    <div>Sobre</div>
                    <div>Produtos</div>
                    <div>Contato</div>
                </section>`;

htmlText = htmlText.split('section').join('ul').split('div').join('li');
console.log(htmlText);

// Salvando o array original em uma variável, antes de remover o último carro da lista
const arrayCarros = ['Ford', 'Fiat', 'VW', 'Honda'];
const cloneArrayCarros = arrayCarros.slice();

console.log(arrayCarros.pop());
console.log(cloneArrayCarros);