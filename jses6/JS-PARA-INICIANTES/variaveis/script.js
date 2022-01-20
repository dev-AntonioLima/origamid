// Variáveis: Responsáveis por guardar dados na memória.

var nome = 'Antonio';
var idade = 23;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Lima',
    cidade = 'Rio';

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

//Hoisting: São movidas para cima do código, porém, o valor atribuído não é movido. 
console.log(nome2);
var nome2 = 'Antonio';
//Retorna Undefined.

var profissao = 'Programador';
console.log(profissao);
// Retorna Programador.

// Exercício 01:

var nome03 = 'Antonio';
var idade2 = '23';
var comidaFavorita;
comidaFavorita = 'Japonesa';

var primeira,
segunda,
terceira,
quarta,
quinta;