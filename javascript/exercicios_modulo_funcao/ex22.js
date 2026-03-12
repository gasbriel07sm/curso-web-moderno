/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function valorPago(mes, valor) {

    if (mes < 1 || mes > 12) {
        return "Mês inválido"
    }

    const juros = 0.05
    const mesesAtraso = mes - 1 
    const total = valor * (1 + juros) ** mesesAtraso

    return `Valor a pagar: R$ ${total.toFixed(2)}`
}

console.log(valorPago(1, 1000))
console.log(valorPago(2, 1000))
console.log(valorPago(3, 1000))
console.log(valorPago(4, 1000))
console.log(valorPago(5, 1000))
console.log(valorPago(6, 1000))
console.log(valorPago(7, 1000))
console.log(valorPago(8, 1000))
console.log(valorPago(9, 1000))
console.log(valorPago(10, 1000))
console.log(valorPago(11, 1000))
console.log(valorPago(12, 1000))
console.log(valorPago(13, 1000))