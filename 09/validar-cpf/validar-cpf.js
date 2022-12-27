export default class ValidarCPF {
    constructor(element) {
        this.element = element;
    }

    limpar(cpf) {
        return cpf.replace(/\D/g, '');
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf) {
        const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        console.log(matchCPF);
        return (matchCPF && matchCPF[0] === cpf);
    }

    validarMudanca(cpfElement) {
        if (this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value);
            cpfElement.classList.add('valido');

            cpfElement.classList.remove('erro');
            cpfElement.nextElementSibling.classList.remove('ativar');
        } else {
            cpfElement.classList.add('erro');
            cpfElement.classList.remove('valido');
            cpfElement.nextElementSibling.classList.add('ativar');
        }
    }

    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarMudanca(this.element);
        })
    }

    adicionarEventoSpan() {
        const erroElemento = document.createElement('span');
        erroElemento.classList.add('erro-text');
        erroElemento.innerText = 'CPF Inválido';
        this.element.parentElement.insertBefore(erroElemento, this.element.nextElementSibling);
    }

    iniciar() {
        this.adicionarEvento();
        this.adicionarEventoSpan();
        return this;
    }
}