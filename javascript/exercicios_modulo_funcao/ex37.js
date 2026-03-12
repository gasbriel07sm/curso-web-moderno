/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function pa(n, a1, r) {

    let termos = []

    for (let i = 0; i < n; i++) {
        termos.push(a1 + i * r)
    }
    
    let an = a1 + (n - 1) * r
    let soma = ((a1 + an) * n) / 2

    return `PA = [${termos}] \nSoma = ${soma}`
}

// an = a1 + (n -1) * r
// sn = ((a1 + an) * n) / 2
console.log(pa(4, 5, 2))
console.log(pa(10, 4, 8))