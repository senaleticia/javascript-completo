export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    toggleModal(event) {
        event.preventDefault();
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    cliqueForaModal(event) {
        if (event.target === this) {
            this.toggleModal(event);
        }
    }

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.toggleModal);
        this.botaoFechar.addEventListener('click', this.toggleModal);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }

        return this;
    }
}