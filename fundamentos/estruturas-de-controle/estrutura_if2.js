function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log("Final") // sempre será executada, pois está fora da estrutura if (não está associada ao IF)
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); {
        console.log(num) // sempre irá exibir o número, pois o bloco if foi finalizado com o ';'  
    }
}

teste2(6)
teste2(8)