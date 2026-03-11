const peso1 = 1.0;
const peso2 = Number('2.0'); // Number() serve para converter strings em números desde que seja possível realizar a conversão

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)) // -> considera inteiro 
console.log(Number.isInteger(peso2)) // -> considera real

// Number.isInteger() verifica se o número passado como parâmetro é um inteiro ou não

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // o método toFixed() recebe como parâmetro a quantidade de casas decimais que devem aparecer
console.log(media.toFixed(2).toString()); // o método toString() faz o inverso do Number(), ou seja, converte número em String

// OBS! -> se quiser ver o número em seu formato binário podemos colocar toString(2):
let num = 10;
console.log(num.toString(2)); // retorna o binário do número
console.log(Number(2).toString(2)); // uma forma de pegar número ao invés de declarar uma variável

// Number com "N" é uma função, o number com "n" é um tipo de dado
