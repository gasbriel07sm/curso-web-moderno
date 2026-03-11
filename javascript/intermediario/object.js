// object - objetos, par de chaves representa uma forma literal de declarar um objeto {}
// objeto é uma coleção de chave valor
// podemos ter objetos dentro de objetos 

const prod1 = {};

prod1.nome = 'Celular'; // criado dinamicamente
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1); // só podemos ter identificador único (chave)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90
};

console.log(prod2);