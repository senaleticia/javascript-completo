/*const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('teste');
menu.classList.toggle('ativo');

if (menu.classList.contains('ativo')) {
    menu.classList.add('laranja');
} else {
    menu.classList.add('inativo');
}

menu.className += ' vermelho';

console.log(menu.className);*/

const animais = document.querySelector('.animais');
console.log(animais.attributes.class);

const imagens = document.querySelector('img');
const possuiAlt = imagens.hasAttribute('title');

imagens.setAttribute('alt', 'É uma raposa');

console.log(imagens.getAttribute('alt'));
console.log(possuiAlt);

const carro = {
    portas: 4,
    andar: function (km) {
        console.log(`Andou ${km} kilômetros`)
    }
}

// Adicionando a classe 'ativo' para todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Removendo a classe 'ativo' de todos os itens do menu, mantendo apenas o primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verificando se todas as imagens tem o atributo 'alt'
const imagensAlt = document.querySelectorAll('img');

imagensAlt.forEach((imagem) => {
    const verificandoAlt = imagem.hasAttribute('alt');
    console.log(imagem, verificandoAlt);
})

// Modificando o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://open.spotify.com/');

console.log(link);