/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

let vetor = [5.5, 6.5, 10, 2, 5.5, 6.5] 
let soma = 0;

for (let v of vetor) {
    soma += v;
}

let media = soma / vetor.length

console.log(`A média dos números é igual a: ${media.toFixed(2)}`)