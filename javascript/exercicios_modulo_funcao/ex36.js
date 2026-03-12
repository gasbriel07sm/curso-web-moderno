/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function mult(vect, num) {

    let resultado = []

    for (let v of vect) {
        resultado.push(v * num)
    }

    return resultado
}

function multValor(vect, num) {

    for (let i = 0; i < vect.length; i++) {
        if (vect[i] > 5) {
            vect[i] = vect[i] * num
        }
    }

    return vect
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mult(vetor, 5))
console.log(multValor(vetor, 3))