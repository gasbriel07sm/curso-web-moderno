/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações */

let vetor = [1, 3, 5, 7, 9, 11, 25, 28, 30]

var dentro = 0;
var fora = 0;

for (let v of vetor) {
    if (v >= 10 && v <= 20) {
        dentro++
    } else {
        fora++
    }
}

console.log(`Dentro: ${dentro}`)
console.log(`Fora: ${fora}`)