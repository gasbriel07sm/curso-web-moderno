// função é uma ação com base em uma sentença de código, trecho de código que é reutilizada
// função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2); // o segundo valor seria undefined por não ter sido passado
imprimirSoma(2, 3, 4, 5, 6); // pega os necessários e ignora o restante
imprimirSoma(); // retorna NaN

// função com retorno 
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // o b recebeu o valor padrão 0 caso nada seja passado
console.log(soma()); // NaN pois o primeiro valor não foi tratado

