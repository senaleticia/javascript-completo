import ValidarCPF from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCPF = new ValidarCPF(cpf).iniciar();

console.log(validarCPF.limpar('987.654.321-00'));
console.log(validarCPF.construir('98765432100'));
console.log(validarCPF.formatar('123.456-789 00'));
console.log(validarCPF.adicionarEvento());

const validadorCPF = new ValidarCPF();
console.log(validadorCPF.validar('951 843 762 05'));