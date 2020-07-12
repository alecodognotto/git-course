/* Usando os métodos 
var calculadora = require ("./calculadora")
calculadora.soma(10,20);
console.log(calculadora.soma(10,20));
...etc
*/

/* Usando módulo - importando */
var calculadora = require("./calculadora");

/* Mostrando o nome vindo do módulo e exportado */
console.log(calculadora.nome);

/* funções internas */
function mult(a,b){
  return a * b;  
}
  
function sub(a,b){
   return a - b;  
}
  
function div(a,b){
   return a/b;  
}

/* Chamada de função via módulo */
console.log("Resultado com chamada da função via módulo");
console.log(calculadora.soma(10,20));

console.log("                               ");
console.log("Resultado com chamada da função de cálculo");
/* console.log(somaFuncao(10,20)); */
console.log(mult(10,20));
console.log(sub(10,20));
console.log(div(10,20));

console.log("                               ");
console.log("Resultado com chamada da função em variável");

var resultSoma = (calculadora.soma(10,20));
var resultMult = (mult(10,20));
var resultSub = (sub(10,20));
var resultDiv = (div(10,20));

console.log("SOMA");
console.log(resultSoma);
console.log("MULT");
console.log(resultMult);
console.log("SUB");
console.log(resultSub);
console.log("DIV");
console.log(resultDiv);

/* var mostrarSite = true;
const site = "www.guiadoprogramador.com";

console.log("Hello World!");
console.log("Meu nome é Alexandre!");
console.log("Estou aprendendo Node.JS");

if(mostrarSite){ // Se mostrar site verdadeiro
    console.log(site); // Print o site
} */