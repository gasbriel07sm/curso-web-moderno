/**
 * A estrutura if else tem a diferença, que se a condição for falsa, irá executar o bloco else
 * Sintaxe:
 * if (<condição>) {
 *  <comandos>
 * } else {
 *  <comandos>
 * }
 */

const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa!') // executa devido ser uma linguagem fracamente tipada