var numero = 20;
var x = 5;
var y = 10;

numero += 10; // numero = numero + 10
console.log(numero);

x += y;

console.log(x);

var idade = 23;
var podeBeber;
var naoPossuiDiabetes = false;

podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Nao pode beber";

console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Sim possui");
else console.log("Nao possui");

var scroll = 1000;

scroll += 500;
console.log(scroll);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCarro && possuiCasa) darCredito = true;
else darCredito = false;

if(darCredito) console.log('Tem credito');
else console.log('Sem credito');