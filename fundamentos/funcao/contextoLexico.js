const valor = 'Global' // vai utilizar o valor global, pois ao declarar uma função ela possui consciência do local onde ela foi declarada
// procura no escopo mais abrangente

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()