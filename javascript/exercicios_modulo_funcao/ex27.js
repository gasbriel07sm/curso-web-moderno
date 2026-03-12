/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function crianca(altura1, taxa1, altura2, taxa2) {

    if (altura1 === altura2) {
        return "As crianças têm a mesma altura"
    }

    let anos = 0

    let menor = altura1 < altura2 ? altura1 : altura2
    let maior = altura1 > altura2 ? altura1 : altura2

    let taxaMenor = altura1 < altura2 ? taxa1 : taxa2
    let taxaMaior = altura1 > altura2 ? taxa1 : taxa2

    if (taxaMenor <= taxaMaior) {
        return "A criança menor nunca ultrapassará a maior"
    }

    while (menor <= maior) {
        menor += taxaMenor
        maior += taxaMaior
        anos++
    }

    return `A criança menor ultrapassará a maior em ${anos} anos`
}

console.log(crianca(1.02, 0.05,1.00,0.02))