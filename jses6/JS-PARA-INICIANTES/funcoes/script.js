function areaQuadrado() {
  console.log('Função ativa');
}

 function areaQuadrado(lado) {
    return lado * lado;
} 

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80,1.8));

function corFavorita(cor) {
    if(cor === 'azul'){
        return 'Eu gosto do céu'
    } else if (cor === 'verde'){
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores'
    }
}

console.log(corFavorita('verde'));

addEventListener('click', function(){ console.log('Oi') });

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

console.log(imc2(20, 1.8));

function terceiraIdade(idade) {
    if(typeof idade !== 'number'){
        return 'Por favor preencha um número'
    } else if (idade >= 60 ){
       return true;
    }  else {
        return false;
    }
    console.log('testando') // return 
}

terceiraIdade(60);

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados}`;
}

console.log(faltaVisitar(93));

var profissao = 'Programador';

function dados() {
    var nome = 'Antonio';
    var idade = 23;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}`, `${idade}`, `${endereco}` , `${profissao}`;
    }
    return outrosDados();
}

console.log(dados());


// Exercicio

function verificaTruthy(){
    var estudando = true;
    var valor;
    var vazio;

    if(!!estudando || !!valor){
        console.log('Verdadeiro: ', estudando);
        console.log('Falso', !!valor, !!vazio);
    } else {
        console.log('Falsos');
    }
}

verificaTruthy();


function perimetroQuadrado(lado){
  var resultado = lado **2;
  console.log(resultado);
}

perimetroQuadrado(4);

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}


console.log(nomeCompleto('Antonio', 'Lima'));

function parImpar(numero){
    if(numero % 2 == 0) {
        console.log('Par');
    } else {
        console.log('Impar');
    }
}

parImpar(8);


function tipoDado(dado){
    dado = 2;
  console.log(typeof(dado));
}

tipoDado();

addEventListener('scroll', function(){
    console.log('Antonio Lima');
});

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${paisesVisitados - totalPaises} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Ja visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

precisoVisitar(20);
jaVisitei(20);