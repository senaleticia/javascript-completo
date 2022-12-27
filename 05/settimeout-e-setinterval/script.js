const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
    setTimeout(() => {
        this.classList.add('ativo');
        console.log('Botão ativado!')
    }, 5000)
}

/*setTimeout(function () {
    console.log('Testando')
}, 20000);*/

/*for (let i = 0; i <= 20; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000 * i);
}*/

function loop(texto) {
    console.log(texto);
}

//setInterval(loop, 3000, 'Passou 3s');

/*let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++);
    if (i > 20) {
        clearInterval(meuLoop);
    }
}, 3000);*/

// Mudando a cor da tela a cada 4 segundos
function mudandoCor() {
    document.body.classList.toggle('active');
}

//setInterval(mudandoCor, 4000);

// Criando um cronômetro utilizando setInterval. Sendo possível iniciar, pausar e resetar (duplo clique no pausar)
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 1500);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}