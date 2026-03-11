/* 12) Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(num) {
    let resultado = 1

    for (let i = 2; i <= num; i++) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(5))