/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

// function declaration
function divisao(dividendo, divisor) {

    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor

    console.log(`Resultado: ${resultado}`)
    console.log(`Resto: ${resto}`)
}

divisao(20,4)

