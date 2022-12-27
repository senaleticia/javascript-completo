class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }

    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;

        return buttonElement;
    }

    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        console.log(this);

        return targetElement;
    }

    static blueButton(text) {
        return new Button(text, 'blue', 'white');
    }
}

const botaoAzul = Button.blueButton();

/*class Button {
    constructor(options) {
        this.options = options;
    }

    static createButton(text, background) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.backgroundColor = background;

        return buttonElement;
    }
}
const optionsButton = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'Comprar'
}

const blueButton = new Button(optionsButton);
const blueButtonStatic = Button.createButton('Clique', 'blue');

console.log(blueButtonStatic);*/