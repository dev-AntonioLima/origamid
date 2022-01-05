var pessoa = {
    nome: 'Antonio',
    idade: 23,
}

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(10));
console.log(quadrado.perimetro(5))
console.table(quadrado);

