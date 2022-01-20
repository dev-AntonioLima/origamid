var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop();
videoGames.push('3DS');
videoGames.length;

function loop(i){
for (i = i; i < 10; i++){
    console.log('Antonio');
 }
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 5;
} 

for ( var i = 0; i< videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break; 
    }
}

videoGames.forEach(function(i, index){
    console.log(i,[i.length ], index);
});

// Crie um array com os anos que o Brasil ganhou a copa
 var brasilCopa = [1959, 1962, 1970, 1994, 2002];

for(i = 0; i < 1; i++){
    brasilCopa.forEach(function(index){
        console.log(' O Brasil ganhou a copa de', `${index}`);
    });
}

 var frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia'];

 for (i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
   if(frutas[i] === 'Pera'){
       break;
   }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);