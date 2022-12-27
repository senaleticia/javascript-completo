var fazTeatro = true;
var fazParteDeUmGrupo = false;

if (fazTeatro == true) {
    console.log('Letícia faz teatro, sim');
} else if (fazParteDeUmGrupo == true) {
    console.log('Letícia faz parte de um grupo de teatro');
} else {
    console.log('Letícia não faz nada relacionado à arte');
}

var nome = '10cm' + 10;

if (nome) {
    console.log(nome);
} else {
    console.log(nome);
    console.log('Nome não existente');
}

if (!fazParteDeUmGrupo) {
    console.log('Letícia não faz parte de um grupo de teatro');
}

var num = 'cat';
console.log(num !== 'dog');

var condicional = (5 - 10) && (5 + 5);
if (condicional) {
    console.log('É verdadeiro', condicional);
} else {
    console.log('É falso', condicional);
}

var segundaCondicional = (5 - 5) || (5 + 5) && (10 - 2);
console.log(segundaCondicional);

var corFavorita = 'prata';

switch (corFavorita) {
    case 'rosa':
        console.log('Olhe o unicórnio da sua garrafinha');
        break;
    case 'lilás':
        console.log('Olhe a sua camiseta');
        break;
    case 'prata':
        console.log('Olhe o seu dedo anelar direito');
        break;
    default:
        console.log('Feche os olhos');
}

// Verificando se a minha idade é maior do que a de algum parente
var minhaIdade = 21;
var idadeIrma = 25;

if (minhaIdade > idadeIrma) {
    console.log('Sua idade é maior do que a da sua irmã');
} else if (minhaIdade < idadeIrma) {
    console.log('Sua idade é menor do que a da sua irmã');
} else if (minhaIdade == idadeIrma) {
    console.log('Você tem a mesma idade que sua irmã');
}

// Valor da expressão abaixo
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verificando se as variáveis abaixo são truthy ou falsy
var meuNome = 'Letícia';
var idade = 21;
var possuiFaculdade = false;
var empregoFuturo;
var dinheiroNaConta = '300';

console.log(!!meuNome, !!idade, !!possuiFaculdade, !!empregoFuturo, !!dinheiroNaConta);

// Comparando a população da China com a população do Brasil (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('A população brasileira é maior que a poplulação chinesa');
} else {
    console.log('A população chinesa é maior que a população brasileira');
}