/**
 * Número indeterminado de vezes -> while()
 * Sintaxe:
 * while (<condição>) {
 *  <comando>
 * }
 * 
 * o comando será executado enquanto a condição for verdadeira
 */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}
