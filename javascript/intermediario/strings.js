// String é uma cadeia de caracteres, delimitando por "", por '' e com ´´ também, onde podemos usar crase para Template Strings

const escola = 'Cod3r';

console.log(escola.charAt(4));
// charAt(<x>) -> o x seria a posição da string que você deseja que seja usada, a contagem começa do 0
console.log(escola.charAt(0));

console.log(escola.charAt(5)); // quando não possui valor na posição buscada ele retorna vazio e não um erro
console.log(escola.charAt(-1)); // mesmo quando colocamos pra retornar algo vazio

console.log(escola.charCodeAt(3)); // retorna o código unicode de tal valor naquela posição (retorna o valor Unicode)

console.log(escola.indexOf('3')); // retorna a posição do valor passado por parâmetro, caso exista
console.log(escola.indexOf(5)); // se não tiver o valor passado por parâmetro é retornado o -1 (negativo)

console.log(escola.substring(1)); // a função substring causa um "recorte", ou seja, neste caso exibe a partir da posição 1 (inclusivo)
console.log(escola.substring(2,4)); // podemos estipular um final como segundo parâmetro (o último valor é não inclusivo)
// se não tiver o valor no substring, exibe o nada, nulo (vazio)

console.log('Escola '.concat(escola).concat("!")); // para realizar concatenações podemos usar o método .concat(), mas podemos usar o + também

console.log(escola.replace(3, 'e')); // o replace serve para trocar valores, ou seja, trocamos o valor 3 da variável por 'e'
console.log(escola.replace('d', 'e')); 
console.log(escola.replace(/\w/g, 'e')); // RegEx

console.log('Ana,Maria,Pedro'.split(',')); // o método split serve para gerar um array, usando o parâmetro como critério de separação

