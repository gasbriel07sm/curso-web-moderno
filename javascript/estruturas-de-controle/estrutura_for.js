/**
 * Quando se sabe quantas vezes será executado
 * 
 * for (inicio; condicao; incremento) {
 *  <comandos>
 * }
 */

let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

// com for:
for (let i = 1; i <= 10; i++) {
    console.log(`Contador = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}