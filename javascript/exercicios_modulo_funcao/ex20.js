/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 */

function notasNecessarias (valor) {
    let nota = 0;

    // 200
    nota = 200
    console.log(`${Math.floor(valor / 200)} notas de 200 R$`)
    valor %= nota
    // 100
    nota = 100
    console.log(`${Math.floor(valor / 100)} notas de 100 R$`)
    valor %= nota
    // 50
    nota = 50
    console.log(`${Math.floor(valor / 50)} notas de 50 R$`)
    valor %= nota
    // 20
    nota = 20
    console.log(`${Math.floor(valor / 20)} notas de 20 R$`)
    valor %= nota
    // 10
    nota = 10
    console.log(`${Math.floor(valor / 10)} notas de 10 R$`)
    valor %= nota
    // 5
    nota = 5
    console.log(`${Math.floor(valor / 5)} notas de 5 R$`)
    valor %= nota
    // 2
    nota = 2
    console.log(`${Math.floor(valor / 2)} notas de 2 R$`)
    valor %= nota
    // 1
    nota = 1
    console.log(`${Math.floor(valor / 1)} notas de 1 R$`)
    valor %= nota

}

notasNecessarias(388)


/* outra lógica:

function notasNecessarias(valor) {

    const notas = [100, 50, 10, 5, 1]

    for (let nota of notas) {

        const quantidade = Math.floor(valor / nota)

        if (quantidade > 0) {
            console.log(`${quantidade} nota(s) de R$ ${nota}`)
            valor %= nota
        }
    }
}
*/