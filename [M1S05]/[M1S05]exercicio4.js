
var numeros = [2, 4, 6, 7, 12];
var soma = numeros.reduce(function(acumulante, valorAtual) {
  return acumulante + valorAtual;
}, 0);

console.log(soma);