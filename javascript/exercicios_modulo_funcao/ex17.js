/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentoSalarial(plano, salario) {
    plano = plano.toUpperCase()
    let aumento = 0;

    switch (plano) {
        case "A":
            aumento = 10
            break;
        case "B":
            aumento = 15
            break;
        case "C":
            aumento = 20
            break;
        default:
            return "Plano inválido"            
    }
    const novoSalario = salario * (1 + aumento / 100)
    return `O novo salário será de ${novoSalario.toFixed(2)}`
}

console.log(aumentoSalarial("A", 2000))
console.log(aumentoSalarial("B", 2000))
console.log(aumentoSalarial("C", 2000))
console.log(aumentoSalarial("D", 2000))