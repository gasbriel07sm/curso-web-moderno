/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

let vetor = [1, 2, 3, -1, -2, -3, 10, 20]
let qtdNeg = 0;

for (let v of vetor) {
    if (v < 0) qtdNeg++; 
}

console.log(`A quantidade de números negativos nesse vetor é de: ${qtdNeg}`)