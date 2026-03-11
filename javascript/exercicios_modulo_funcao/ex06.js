/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

// function declaration
console.log("Function Declaration: ")
function jurosSimples(capital, taxa, tempo) {
    const juros = capital * taxa/100 * tempo
    return capital + juros
}

function jurosCompostos(capital, taxa, tempo) {
    return capital * (1 + taxa/100) ** tempo
}

console.log(jurosSimples(1000, 10, 1))
console.log(jurosCompostos(1000, 10, 1))

