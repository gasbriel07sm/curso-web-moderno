let numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero); // dentro temos o valor de let
}
console.log('fora = ', numero);
// preferência do escopo menor
// let tem escopo global, função e bloco