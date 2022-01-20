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

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000'

menu.color = 'blue';
var bg = menu.backgroundColor;

menu.esconder = function(){
    console.log('Escondido');
}


// Crie um objeto com seus dados pessoais
var eu = {
  nome: 'Antonio',
  sobrenome: 'Lima',
  idade: 23,
  escolaridade: 'Superior Incompleto',
  temEmprego: true,
  exibeNome(){
      console.log(this.nome + ' ' + this.sobrenome);
  }
}

eu.exibeNome();

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa ===  'homem'){
            return 'Latir';
        } else {
            return 'Nada';
        }
    }
}
