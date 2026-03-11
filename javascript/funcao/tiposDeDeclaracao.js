// tipos de declaração funções
console.log(soma(3,4))
// console.log(sub(3,4)) -> erro, só pode usar depois de ser declarada
// console.log(mult(3,4))

// function declaration -> primeiro carrega a função e depois executa o código ao utilizar a function declaration
function soma(x,y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4))

// named function expression 
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(3,4))
