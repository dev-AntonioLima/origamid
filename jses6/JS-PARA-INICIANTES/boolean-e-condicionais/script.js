var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
    console.log('É verdadeiro');
    var x = 10;
} else if (possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}

var nome = 0;

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if(!possuiGraduacao){
    console.log('Não possui graduação')
}

var x2 = 8;

console.log(x2 === 8);
console.log(x != 9);

if((5-5) && (5+5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

if((5-10) && (5+5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);

var corFavorita = 'Verde';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;

     case 'Verde':
        console.log('Olhe para a floresta');   
        break;

       default:
        console.log('Feche os olhos'); 
}

// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = '23';
var outroIdade = '50';

if(minhaIdade > outroIdade){
    console.log('Minha idade é maior: ', minhaIdade);
} else if (minhaIdade < outroIdade){
    console.log('Minha idade é menor: ', outroIdade);
}
else{
    console.log('Idades são iguais');
}

// Dependendo do resultado coloque no console 'É maior', 'É igual

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
nome = 'Andre';
idade = 28;
possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('BRASIL !');
} else{
    console.log('CHINA');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');
} else {
 console.log('Falso');
}