const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
    document.querySelector('.content').innerHTML = "Carregando...";
    const pageResponde = await fetch(url);
    const pageText = await pageResponde.text();
    replaceContent(pageText);
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerHTML;
}

window.addEventListener('popstate', () => {
    console.log(window.location.href);
    fetchPage(window.location.href);
})

links.forEach(link => {
    link.addEventListener('click', handleClick);
})