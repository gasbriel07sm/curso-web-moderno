// desestruturação, tiram da estrutura alguma coisa, uma forma de extrair elementos 
// podemos retirar de arrays ({}) e objetos ([])

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// {<x>, <y>,....} = <objeto>; --> forma de desestruturar
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // caso tente setar um atributo que não existe
console.log(sobrenome, bemHumorada);

// extrair dentro de outro objeto
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);
