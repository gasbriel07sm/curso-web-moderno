/**
 * Fórmula = PI * raio * raio
 */

const raio = 10;
const area = Math.PI * Math.pow(raio, 2);

console.log("A área é igual a: " + area.toFixed(2)); // o método .toFixed(<x>) serve para colocar uma limitação nas casas decimais, onde x é o valor da quantidade de casas decimais pós a vírgula