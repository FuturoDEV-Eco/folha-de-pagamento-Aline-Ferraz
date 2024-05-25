function calcularImpostoRenda(salarioBruto) {

    let impostoRenda = 0;

    if (salarioBruto <= 2112.00) {
        impostoRenda = 0.00;
    } else if (salarioBruto <= 2826.65) {
        impostoRenda = (salarioBruto * (7.5 / 100)) - 158.40;
    } else if (salarioBruto <= 3751.05) {
        impostoRenda = (salarioBruto * (15 / 100)) - 370.40;
    } else if (salarioBruto <= 4664.68) {
        impostoRenda = (salarioBruto * (22.5 / 100)) - 651.73;
    } else {
        impostoRenda = (salarioBruto * (27.5 / 100)) - 884.96;
    }

    return impostoRenda;

}

module.exports = calcularImpostoRenda;