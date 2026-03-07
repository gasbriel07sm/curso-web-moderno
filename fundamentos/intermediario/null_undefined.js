const a = {name: 'Teste'}; // a constante a não possui esse valor, ela apenas referencia o endereço de memória que está esse objeto
const b = a; // constante b irá referenciar o mesmo local de memória da constante a
// ou seja, se alterar o valor de a irá interferir no de b e a mesma coisa o contrário, pois estamos alterando o valor do local da memória 

b.name = 'Opa';

console.log(a);
console.log(b);
// objeto, array e funções possuem valores passados por referência (ATRIBUIÇÃO POR REFERÊNCIA)

// podemos fazer:
let c = 3;
let d = c;
d++;

console.log(c);
console.log(d);
// tipos primitivos, os valores são passados por valor, são copiados, são valores independentes (ATRIBUIÇÃO POR VALOR)

let valor; // não inicializada
console.log(valor); // undefined > não foi atribuido um valor
// console.log(valor2); // not defined > não foi definido a variável (não foi declarado)

valor = null; // não está apontando a nenhum endereço de memória (ausência de valor)
console.log(valor);
// não é possível acessar valores de variáveis nulos

const produto = {};
console.log(produto.preco); // gera undefined (o preco não está definido)
console.log(produto); // retorna vazio

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // deixar sem preco
console.log(!!produto.preco)
console.log(produto); // optar sempre para o nulo ao inves do undefined