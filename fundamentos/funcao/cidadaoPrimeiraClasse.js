// Função em JavaScript é First-Class Object (Citizens)
// Higher-Order function (função de alta ordem)
// a função é tratado como um dado

// criar função de forma literal
// retorno é opcional, e se não declarar um retorno, será undefined
// na função, é obrigatório a declaração das chaves
function fun1() {}

// armazenar a função em uma variável
const fun2 = function () {} // função anônima (podemos chamar a variável como função)

// armaexar em um array
const array = [function (a,b) {return a + b, fun1, fun2}]
console.log(array[0](2,3))

// armaezenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar a função como parâmetro
function run(fun) {
    fun()
}
run(function () { console.log("Executando....")})

// uma função pode retornar / conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)