var nome = 'Antonio';


var nomeMinusculo = nome.toLowerCase();

var btn = document.getElementsByClassName('.btn');

var palavras = {
    palavra1: 'BRASIL',
    palavra2: 'EUA',
    palavra3: 'CHINA',
}

console.log(palavras.palavra1.toLowerCase());
console.log(palavras.palavra2.length);
console.log(typeof(palavras.palavra3));


var elemento = document.querySelector('.btn');

elemento.addEventListener('click', function(){
    console.log('Clicou');
});
