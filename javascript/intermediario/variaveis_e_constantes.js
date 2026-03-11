/** Sintaxe de variáveis:
 * var/let <identificador>;
 * var/let <identificador> = <valor>;
*/

var a = 3;
let b = 4; // mais correto e moderna para realizar a declaração de uma variável
const c = 10; // constantes não alteram seu valor durante a execução do programa

console.log(a);
console.log(b);
console.log(c);

b = 40 ;
// c = 20; -> erro, pois constantes não podem ter seus valores alterado
// console.log(c);
console.log(b);
