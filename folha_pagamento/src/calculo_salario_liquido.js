const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularINSS = require("./calculo_inss");

function calcularSalarioLiquido(salarioBruto, descontos = 0) {

    let salarioLiquido = 0;

    salarioLiquido = salarioBruto - calcularINSS(salarioBruto) - calcularImpostoRenda(salarioBruto) - descontos;

    return salarioLiquido;

}

module.exports = calcularSalarioLiquido;