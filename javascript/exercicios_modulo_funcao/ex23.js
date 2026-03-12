/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPonderada(cod, n1, n2, n3) {

    const maior = Math.max(n1,n2,n3)
    const soma = n1 + n2 + n3

    const media = ((maior * 4) + ((soma - maior) * 3)) / 10

    const status = media >= 5 ? "APROVADO" : "REPROVADO"

    return `Aluno ${cod} | Média: ${media.toFixed(2)} | ${status}`
}

let cod = 0;

while (cod >= 0) {
    console.log(mediaPonderada(cod, 5.5, 6.5, 7.5))
    cod++;
    if (cod == 3) {
        cod = -1;
    }
}