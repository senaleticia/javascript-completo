const carros = ['Ford', 'Fiat', 'Honda'];

/*carros.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
})*/

const novaArray = carros.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
    return item.toUpperCase();
})

console.log(carros);
console.log(novaArray);

const li = document.querySelectorAll('li');

const retornoForEach = li.forEach((item, index) => {
    item.classList.add('ativa' + index)
});

const numeros = [2, 4, 5, 6, 78];
const numerosMultDois = numeros.map(n => n * 2);

//console.log()

/* function nomeAulas(aula) {
    return aula.nome;
}

const arrayNomeAulas = aulas.map(function (aula) {
    return aula.nome;
})

console.log(arrayNomeAulas);

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);*/

const aulas = [10, 25, 30];

const aulasReduce = aulas.reduce((acumulador, item) => {
    console.log(acumulador, item);
    return acumulador + item;
}, 0)

console.log(aulasReduce);

const numerosLista = [10, 25, 30, 3, 54, 33, 22];
const maiorNumero = numerosLista.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
})

console.log(maiorNumero);

const aulasArray = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulasArray.filter((aula) => {
    return aula.min >= 15;
});

console.log(maiores15);

const listaAulas = aulasArray.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
})

const frutas = ['Banana', 'Pera', 'Uvas'];

const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
});

/*const every = frutas.every((fruta) => {
    console.log(fruta);
    return fruta;
});

const indexUva = frutas.findIndex(fruta => {
    return fruta === 'Uvas';
})

console.log('Index: ', indexUva);

console.log(every);
//console.log(temUva);

const everyNumeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = everyNumeros.every(function (n) {
    return n >= 6;
});

console.log(maiorQue3);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const frutasArray = frutas1.filter((fruta) => {
    console.log(fruta);
    return fruta;
})

console.log(frutasArray);*/

// Selecionando cada curso e retornando um array, com objetos contendo título, descrição, aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const horas = curso.querySelector('.horas').innerText;
    const aulas = curso.querySelector('.aulas').innerText;

    return { titulo, descricao, horas, aulas }
})

console.log(objetosCurso);
console.log(arrayCursos);

// Retornando uma lista com os números maiores que 100
const numbers = [3, 44, 333, 23, 122, 322, 33]
const maiores100 = numbers.filter(n => n > 100);

console.log(maiores100);

// Verificando se o Baixo faz parte da lista de instrumentos e retornando true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const possuiBaixo = instrumentos.some((instrumento) => {
    return instrumento === 'Baixo';
});

console.log(possuiBaixo);

// Retornando o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

const precoTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = item.preco.replace('R$ ', '').replace(',', '.');

    return acumulador + precoLimpo;
}, 0)

console.log(precoTotal);