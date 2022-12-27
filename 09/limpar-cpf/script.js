const cpfsList = document.querySelectorAll('.cpf li');

function elementsInnerText([...elements]) {
    return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFs = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFs = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements);
    const cpfsFormatados = formatarCPFs(cpfs);

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    })
}

substituirCPFs(cpfsList);

console.log(limparCPF('987.456.321-00'));
console.log(construirCPF('98745632100'));

const resultado = elementsInnerText(cpfsList);