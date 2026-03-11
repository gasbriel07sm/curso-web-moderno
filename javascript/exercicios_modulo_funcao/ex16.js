/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas */

function calculdadora (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return `${num1} ${operacao} ${num2} = ${num1 + num2}`
        case '-':
            return `${num1} ${operacao} ${num2} = ${num1 - num2}` 
        case '*':
            return `${num1} ${operacao} ${num2} = ${num1 * num2}`  
        case '/':
            if (num2 === 0) return "Divisão por zero não é permitida"
            return `${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`
        default:
            return `Operação inválida`       
    }
}

console.log(calculdadora(1, '+', 3))
console.log(calculdadora(1, '-', 3))
console.log(calculdadora(1, '*', 3))
console.log(calculdadora(1, '/', 3))
console.log(calculdadora(1, '%', 3))