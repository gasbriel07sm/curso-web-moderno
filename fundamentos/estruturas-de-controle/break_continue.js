const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) break // pula pra fora, o break age em atitudes de repetição e switch
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) continue // ele interrompe a execução atual e vai para a próxima
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
