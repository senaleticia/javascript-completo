for (var numero = 1; numero <= 5; numero++) {
    console.log(numero);
}

var i = 0;

while (i <= 50) {
    console.log(i);
    i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] == 'Xbox') {
        break;
    }
}

var frutas = ['Abacaxi', 'Uva', 'Laranja', 'Limão', 'Morango'];

frutas.forEach(function (item, index, array) {
    frutas.pop();
    console.log(item, index, array);
})

// Criando um array com os anos que o Brasil ganhou a Copa do Mundo
var copasBrasil = [1958, 1962, 1970, 1994, 2002];
console.log(copasBrasil);

// Interagindo com um array utilizando um loop para mostrar 'O Brasil ganhou a Copa de ${ano}' no console
copasBrasil.forEach(function (ano) {
    console.log(`O Brasil ganhou a Copa de ${ano}`);
})

// Interagindo com um loop de frutas e parando quando chegar em 'Pera'
var listaFrutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (var fruta = 0; fruta < listaFrutas.length; fruta++) {
    console.log(listaFrutas[fruta]);
    if (listaFrutas[fruta] == 'Pera') {
        break;
    }
}

// Colocando a última fruta do array acima em uma variável, sem remover a mesma do array
var ultimaFruta = listaFrutas[listaFrutas.length - 1];
console.log(ultimaFruta);