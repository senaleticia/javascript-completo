const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

//animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();

    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

/*h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);*/
function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handleKeyboard);

const imagens = document.querySelectorAll('img');

function handleImagem(event) {
    console.log(event.currentTarget.getAttribute('src'));
}

imagens.forEach((imagem) => {
    imagem.addEventListener('click', handleImagem);
});

/* Adicionando a classe 'ativo' nos links internos do site, quando o usuário clicar nele e remover os demais itens, se possuírem.
Previnindo também o comportamento padrão deles */
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// Selecionando todos os elementos a partir do body, mostrando exatamente quais elementos estão sendo clicados
const elementosGerais = document.querySelectorAll('*');

/*function handleElemento(event) {
    event.currentTarget.remove();
}

elementosGerais.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
});*/

// Aumentando todo o texto, quando o usuário teclar o botão t
function handleKeyT(event) {
    if (event.key === 't') {
        document.body.classList.toggle('fonte-maior');
    }
}

window.addEventListener('keydown', handleKeyT);