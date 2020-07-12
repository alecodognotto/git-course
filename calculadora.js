var nome = "Minha Calculadora V1";

/* Posso adicionar todas as funções no módulo */
function soma(a, b) {
    return a + b;
}

module.exports = {
    soma,
    nome 
};

/* Posso exportar todas as funções e variáveis 
module.exports = {
   soma,
   mult,
   sub,
   div

};
*/