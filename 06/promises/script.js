const promessa = new Promise((resolve, reject) => {
    let condicao = false;

    if (condicao) {
        setTimeout(() => {
            resolve({ nome: 'Letícia', idade: 21 });
        }, 1000)
    } else {
        reject(Error('Ocorreu um erro na promise'))
    }
});

const retorno = promessa.then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = 'Desenvolvedor';
    return resolucao;
}).then(resolucao => { console.log(resolucao) }, rejeitada => {
    console.log('CATCH', rejeitada)
}).finally(() => {
    console.log('Acabou!');
});

console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    }, 2500);
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 3000);
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})