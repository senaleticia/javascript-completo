function createButton(text) {
    const numeroSecreto = 'aBcDeFgH963258';

    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    return {
        text, element, numeroSecreto
    }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar, btnVender);

function Pessoa(nome) {
    if (!(this instanceof Pessoa))
        return new Pessoa(nome);
    this.nome = nome;
}

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
}

const dev = Pessoa('Letícia');
console.log(dev);

function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        })

        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        })

        return this;
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })

        return this;
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        })

        return this;
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        })

        return this;
    }

    return {
        elements, hide, show, on, addClass, removeClass
    }
}

const buttons = $$('button');
console.log(buttons.show());

function handleClick(event) {
    console.log(event.target);
    buttons.addClass('ativo');
}

buttons.on('click', handleClick);