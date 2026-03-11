/**
 * Operadores Relacionais:
 * (>) -> maior que
 * (<) -> menor que
 * (>=) -> maior ou igual a
 * (<=) -> menor ou igual a
 * (==) -> igual (verifica apenas o valor)
 * (===) -> estritamente igual (verifica o tipo)
 * (!=) -> diferente (verifica apenas o valor)
 * (!==) -> estritamente diferente (verifica o tipo também)
 */

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 1)
console.log('04)', '3' !== 1)

console.log('05)', 3 < 2)
console.log('06)', 3 <= 2)
console.log('07)', 3 > 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('12)', undefined === null)