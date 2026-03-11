function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // pegar todos os parâmetros passados ao chamar a variável
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))