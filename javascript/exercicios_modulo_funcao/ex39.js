/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function trocaVect(vetA, vetB) {

    for (let i = 0; i < vetA.length; i++) {
        [vetA[i], vetB[i]] = [vetB[i], vetA[i]]
    }
    return { vetorA, vetorB }
} 

let vetorA = [1,2,3]
let vetorB = [4,5,6]

console.log(trocaVect(vetorA, vetorB))