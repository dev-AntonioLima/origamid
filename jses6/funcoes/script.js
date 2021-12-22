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