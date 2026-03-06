/**
 * como criar uma variável 
 * 
 * Sintaxe:
 * var/let <identificador>; 
 * var/let <identificador> = <valor>;
 * 
 * identificador = nome que você irá dar para as variáveis
 */

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);