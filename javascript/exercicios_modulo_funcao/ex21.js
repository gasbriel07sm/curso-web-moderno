/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
e 4) conveniados acima de 60 anos pagam R$130 */

function valorPago(idade) {
    let total = 100;

    if (idade < 10 && idade > 0) {
        total += 80
    } else if (idade >= 10 && idade < 30) {
        total += 50
    } else if (idade >= 30 && idade <= 60) {
        total += 95
    } else {
        total += 130
    }
    
    return `O valor pago do plano é igual ${total}`
}

console.log(valorPago(5))
console.log(valorPago(15))
console.log(valorPago(55))
console.log(valorPago(67))
