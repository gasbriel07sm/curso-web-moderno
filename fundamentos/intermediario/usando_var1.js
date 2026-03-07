{
    {
        {
            {
                var sera = 'Será'; 

                let teste = 'teste';
                console.log(teste);
            }
        }
    }
}
console.log(sera); // variáveis declaradas com var são visiveis fora do bloco (hoisting)
// console.log(teste); -> variáveis declaradas com let só são visiveis dentro dos blocos que elas foram criadas

function teste() {
    var local = 123;
}

teste();
// console.log(local); -> ao declarar com var dentro de uma função ai sim o escopo estará definido apenas para aquela função, não sendo visível fora do escopo da função

// criar variáveis globais é problemático, escopo global >> qualquer sobrescrita pode causar um erro

// var -> escopo global (visibilidade global) , escopo funcao (visibilidade apenas dentro da funcao)