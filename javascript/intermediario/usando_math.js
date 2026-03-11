// temos uma classe denominada Math, serve para facilitar certas operações matemáticas

// Math.PI // retorna o PI com precisão maior 
// Math.pow(x,y) // retorna um número elevado a outro número, neste caso x elevado a y

const raio = 5.6;
let area = Math.PI * Math.pow(raio,2);
console.log(area);

const pi = Math.PI; // podemos declarar o valor de um resultado de uma operação Math com variáveis e constantes
area = pi * Math.pow(raio,2);
console.log(area);

console.log(typeof Math); // Math é um objeto