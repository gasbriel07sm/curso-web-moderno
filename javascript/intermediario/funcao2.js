// armazenando uma função em uma variável 
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2,3)

// armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b;
}
console.log(soma(2,3))

// retorno implícito 

const subtracao = (a,b) => a -b; // se não criar o corpo da função é porque ela terá apenas uma linha (uma única sentença do código)
console.log(subtracao(5,2));