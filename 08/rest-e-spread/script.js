function perimetroForma(lado, totalLados, ...listaArgumentos) {
    console.log(listaArgumentos);

    return lado * totalLados;
}

function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio)
    });
}

const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto'];
anunciarGanhadores('smartphone', ...ganhadores);

const frutas = ['Abacaxi', 'Limão', 'Laranja'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, ...legumes];

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray);

// Reescrevendo a função utilizando valores iniciais de parâmetros com ES6
function createButton(background = 'red', color = 'white') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}

// Utilizando o método push para inserir as frutas ao final de comidas
const frutasList = ['Banana', 'Uva', 'Morango'];
const comidasList = ['Pizza', 'Batata'];

comidasList.push(...frutasList);