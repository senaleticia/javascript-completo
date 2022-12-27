console.log(typeof Array.from != 'undefined');

if (typeof Array.fromaleatorio != 'undefined') {
    console.log('Existe');
} else {
    console.log('Não existe');
}

// Listando 5 objetos nativos
Array
Object
Function
String
Number

// Listando 5 objetos do browser
Window
history
NodeList
HTMLCollection
Document

// 2 métodos, propriedades ou objetos presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden != 'undefined') {
    console.log('Existe no Chrome');
} else {
    console.log('Não existe no Firefox');
}

if (typeof document.webkitVisibilityState != 'undefined') {
    console.log('Existe no Chrome');
} else {
    console.log('Não existe no Firefox');
}