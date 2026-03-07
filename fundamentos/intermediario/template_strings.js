 // sem uso de template strings, realizando concatenações
 const nome = 'Rebeca';
 const concatenacao = 'Ola ' + nome + '!';

 // com template string
 // o template string considera espaços, tabulações que o usuário fizer

 const template = `Olá ${nome}!`; 
console.log(template);

// expressões
console.log(`1 + 1 = ${1+1}`); // realiza a soma devido o ${} que ele tenta interpretar o que está dentro das chaves

// arrow functions (podemos chamar uma função dentro de uma expressão)

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`); // chamamos a função dentro de um template string