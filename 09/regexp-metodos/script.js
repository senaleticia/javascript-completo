const regexp = /Java/g;
const frase = 'Javascript e Java linguagem 101 Java';

//const regexp2 = new RegExp('\\w', 'gi');

console.log(regexp.test(frase));

let i = 0;
while (regexp.test(frase)) {
    console.log(i++, regexp.lastIndex);
}

const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java';
const regexp2 = /Script/g;

const resultados = frase2.split(regexp2);
console.log(resultados);

const tags = `
<ul>
    <li></li>
</ul>`

const regexp3 = /<li/g;

const rsTags = tags.replace(regexp3, '$& class="ativa"');
console.log(rsTags);

const emails = `empresa@email.com
contato@email.com
suporte@email.com`

const regexp4 = /(\w+@)[\w.]+/g;

const rsEmails = emails.replace(regexp4, function (...args) {
    console.log(args[3]);
    return '$1X';
});