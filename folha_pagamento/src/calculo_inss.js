function calcularINSS(salarioBruto) {

    const tetoINSS = 908.85;
    let inss = 0;

    if (salarioBruto <= 1412) {
        inss =  salarioBruto * (7.5 / 100);
    } else if (salarioBruto <= 2666.68) {
        inss = salarioBruto * (9 / 100);
    } else if (salarioBruto <= 4000.03) {
        inss = salarioBruto * (12 / 100);
    } else {
        inss = salarioBruto * (14 / 100);
    }

    if (inss > tetoINSS) inss = tetoINSS;

    return inss;

}

module.exports = calcularINSS;