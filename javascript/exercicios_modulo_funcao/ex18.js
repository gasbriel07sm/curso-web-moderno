/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function escreverExtenso(num) {
    switch (num){
        case 0:
            return "zero"
        case 1:
            return "um"    
        case 2:
            return "dois"
        case 3:
            return "três"    
        case 4:
            return "quatro"
        case 5:
            return "cinco"    
        case 6:
            return "seis"
        case 7:
            return "sete"    
        case 8:
            return "oito"
        case 9:
            return "nove"    
        case 10:
            return "dez"   
        default:
            return "Número fora do intervalo"     
    }
}

console.log(escreverExtenso(0))
console.log(escreverExtenso(1))
console.log(escreverExtenso(2))
console.log(escreverExtenso(3))
console.log(escreverExtenso(4))
console.log(escreverExtenso(5))
console.log(escreverExtenso(6))
console.log(escreverExtenso(7))
console.log(escreverExtenso(8))
console.log(escreverExtenso(9))
console.log(escreverExtenso(10))
console.log(escreverExtenso(11))