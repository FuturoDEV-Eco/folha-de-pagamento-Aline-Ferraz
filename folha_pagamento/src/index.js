const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularINSS = require("./calculo_inss");

console.log(calcularINSS(2600).toFixed(2));
console.log(calcularImpostoRenda(5000).toFixed(2));