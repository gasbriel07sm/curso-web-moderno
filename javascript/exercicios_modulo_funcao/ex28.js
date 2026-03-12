/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let vetor = [1,2,3,4,5,6,7,8,9,10]

let pares = 0
let impares = 0

for (let v of vetor) {
    if (v % 2 === 0) pares++
    else impares++
}

console.log(`Pares: ${pares}`)
console.log(`Ímpares: ${impares}`)