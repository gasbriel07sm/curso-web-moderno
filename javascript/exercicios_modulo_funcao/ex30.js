/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

let vetor = [1, 3, 5, 20, 200, 354, 123]

var maior = vetor[0]
var menor = vetor[0]


for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) maior = vetor[i]
    if (vetor[i] < menor) menor = vetor[i]
}

console.log(`Maior = ${maior}`)
console.log(`Menor = ${menor}`)