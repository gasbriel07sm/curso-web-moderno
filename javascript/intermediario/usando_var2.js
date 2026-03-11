var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);
// como o var não é restrito ao bloco, o valor da variavel numero foi sobrescrito dentro do bloco, logo ficando visível dentro do bloco quanto fora