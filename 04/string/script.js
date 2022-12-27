const comida = "Pizza";
const bebida = new String("Água");

const frase = "Quero que prometa, que se comprometa";
console.log(frase[frase.length - 1]);
console.log(frase.charAt[frase.length - 1]);

const sentenca = "A melhor bebida é ";
const cafe = "café!"

const sentencaFinal = sentenca.concat(cafe);

const fruta = 'Abacaxi';
const frutasLista = 'Limão, Abacaxi, Laranja';

console.log(frutasLista.includes(fruta, 14));
console.log(fruta.endsWith('xi'));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao2.slice(-5));

console.log(fruta.lastIndexOf('xi'));

const preco = 'R$ 199,90';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '- '));
});

const repetir = "Tá";
repetir.repeat(5);

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlArray);
console.log(htmlText);
console.log(htmlNovo);

const frutasArray = ['Limão', 'Abacaxi', 'Laranja'];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo3.toUpperCase() === 'FEMININO');

const valor = " R$ 23.00 ";
valor.trim();

// Somando os valores de taxa e valores de recebimento com foreach
const transacoes = [
    {
        descricao: 'Taxa do pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de taxa de cliente',
        valor: 'R$ 49'
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
    const numeroLimpo = +transacao.valor.replace('R$ ', '');

    if (transacao.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo
    } else if (transacao.descricao.slice(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo
    }
})

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retornando um array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substituindo span por a
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`
html = html.split('span').join('a');

console.log(html);

// Retornando o último caracter da frase
const fala = 'Melhor do ano!';
console.log(fala[fala.length - 1]);

// Retornando o total de taxas
const transacoes2 = ['Taxa do banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let qtdTaxa = 0;
transacoes2.forEach((transacao) => {
    transacao = transacao.toLowerCase().trim().slice(0, 4);

    if (transacao == 'taxa') {
        qtdTaxa++
    }
})

console.log(qtdTaxa);