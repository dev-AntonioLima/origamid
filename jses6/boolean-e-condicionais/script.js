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