function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro();
console.log(carro);

if (true) {
  var mes = "Dezembro"; // nao respeita o escopo
  console.log(mes);
}
console.log(mes);

if (true) {
  let ano = 2022; // respeita o escopo
  console.log(ano);
}
// // console.log(ano);

// var i = 50;

// for(let i = 0; i < 10; i++){
//   console.log(`Numero ${i}`);
// }

// console.log(i * 10);


// const semana = 'Sexta';
// semana = 'Quinta';  

// console.log(semana);

// const data = {
//   ano: 2018,
//   mes: 'Dezembro',
// }

// data.ano = 2022;
// data.mes = 'Novembro';

// console.log(data);

// Exercicio

// retorna com erro pois let e const estao dentro de um bloco diferente do console.
// Declarando 'dois' fora dos blocos.
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

somarDois(4);

let numero;
for(numero = 0; numero <= 49; numero++) {
   console.log(numero);
}

const total = 10 * numero;
console.log(total);

