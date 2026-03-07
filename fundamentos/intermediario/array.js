// array - podemos agrupar valores por meio dos colchetes [], de forma linear, um elemteno atrás do outro a partir de um único identificador, indexada (acessada por meio de números)
// o array do JavaScript o array é heterogêneo (ou seja, podemos ter vários tipos), e não possui tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]); // acessando valores do array
console.log(valores[4]); // se acessar um valor que não existe ele retorna undefined (indefinido)

valores[4] = 10;
console.log(valores);

console.log(valores.length); // o método length() retorna a quantidade de elementos total do array 

valores.push({id: 3}, false, null, 'teste'); // podemos adicionar valores a um array com o método push(), irá adicionar no final do array
console.log(valores);

console.log(valores.pop()); // o método pop serve para retirar o último elemento do array e retorna o elemento que foi removido
console.log(valores);

delete valores[0]; // o delete exclui qual o índice do valor passado
console.log(valores);

console.log(typeof valores); // retorna o valor object 