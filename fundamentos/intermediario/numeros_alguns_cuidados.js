console.log(7 / 0);
// Infinity -> divisão por 0 retorna Infinity

console.log("20" / 2);
// o JavaScript acaba realizando uma conversão implícita dos dados e acaba realizando a operação considerando o "20" como valor numérico
console.log("20.5" / 2) // mesmo simulando um flutuante funciona

console.log("Show" * 2);
// NaN -> retorna um Not a Number, não mostrando a string tantas vezes

console.log(0.1 + 0.7); // gera imprecisão 
// problema com precisão com números flutuante I3E (padrão)

// console.log(10.toString()); gera um unexpectedToken, deve fazer assim:
console.log((10.345).toFixed(2).toString());

console.log('3' + 2) // realiza a concatenção ao inves de realizar a soma como ocorreu com a divisão e subtração


