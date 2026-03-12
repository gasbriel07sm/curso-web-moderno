/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function conceitos(nota) {
    for (let n of nota) {
        if (n < 0 || n > 10) {
            console.log(`${n} -- nota inválida`)
        }
        if (n >= 0 && n < 5) {
            console.log(`${n} -- Conceito D`)
        } else if (n >= 5 && n < 7) {
            console.log(`${n} -- Conceito C`)
        } else if (n >= 7 && n < 9) {
            console.log(`${n} -- Conceito B`)
        } else if (n >= 9 && n <= 10)
            console.log(`${n} -- Conceito A`)
    }
}

let nota = [1, 5, 7, 8, 9, 10]
conceitos(nota)