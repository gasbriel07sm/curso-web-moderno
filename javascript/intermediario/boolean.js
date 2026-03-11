let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// temos os literais false e true
// podemos usar valor 1 e 0 como valores booleanos

isAtivo = 1;
console.log(!!isAtivo); // estamos verificando se o valor 1 é verdadeiro ou falso (TRUE)

isAtivo = 0;
console.log(!!isAtivo); // estamos verificando se o valor 0 é verdadeiro ou falso (FALSO)

// tipos verdadeiros (se comportam como verdadeiro)
// !! serve para forçar pra ver se o valor é verdadeiro ou falso

// todos os inteiros diferente de 0 são verdadeiros
console.log("Verdadeiros: ");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // não está verificando a atribuição, e sim se o valor da atribuição é verdadeiro ou não no contexto

console.log("Falsos: ");
console.log(!!0);
console.log(!!""); // string vazia
console.log(!!null); // nulo
console.log(!!NaN); // Not a Number
console.log(!!undefined); // indefinido
console.log(!!(isAtivo = false));

let nome = '';
console.log(nome || 'Desconhecido'); // determinar um valor padrão de uma variável 

console.log("finalizando...")
console.log(!!('' || null || 0 || ' '));