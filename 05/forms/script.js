console.log(document.forms[0]);

const contato = document.querySelector('#contato');
const dados = {};

function handleChange(event) {
    //console.log(event.target.name);
    dados[event.target.name] = event.target.value;
    console.log(dados);
}

contato.addEventListener('change', handleChange);