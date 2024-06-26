const calcularINSS = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");

const readline = require('readline');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let nomeFuncionario = "";
let cpfFuncionario = 99999999999;
let mesPagamento = 0;
let salarioFuncionario = 0;
let outrosDescontos = 0;

input.question("Qual o nome do funcionário? ", (nomeDigitado) => {

    nomeFuncionario = nomeDigitado;

    input.question("Qual é o CPF do funcionário? ", (cpfDigitado) => {

        if (cpfDigitado.length === 11) {
            cpfFuncionario = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else {
            console.log("CPF digitado é inválido");
        }

        input.question("Qual é o mês do pagamento? ", (mesDigitado) => {
            
            mesPagamento = Number(mesDigitado);

            input.question("Qual é o salário do funcionário? ", (salarioDigitado) => {

                salarioFuncionario = (Number(salarioDigitado));

                console.log("--- Folha de Pagamento ---");
                console.log(`Nome: ${nomeFuncionario}`);
                console.log(`CPF: ${cpfFuncionario}`);
                console.log("Salário Bruto: R$ " + salarioFuncionario.toFixed(2));
                console.log("INSS: R$ " + calcularINSS(salarioFuncionario).toFixed(2));
                console.log("Imposto de Renda: R$ " + calcularImpostoRenda(salarioFuncionario).toFixed(2));
                console.log("Salário Líquido: R$ " + calcularSalarioLiquido(salarioFuncionario).toFixed(2));

                input.question("Gerar PDF da folha de pagamento do funcionário? S/N ", (gerarPDF) => {
                    
                    if((gerarPDF.toLocaleLowerCase()) === "s"){
                        const doc = new PDFDocument();
                        doc.pipe(fs.createWriteStream(`./src/folhas_pagamento/holerite_${mesPagamento}_${nomeFuncionario}.pdf`));
                        doc.fontSize(12);

                        doc.text('--- Folha de Pagamento ---');
                        doc.text(`Data de Geração: ${new Date().toLocaleDateString()}`);
                        doc.text(`Nome: ${nomeFuncionario}`);
                        doc.text(`CPF: ${cpfFuncionario}`);
                        doc.text(`Nome: ${nomeFuncionario}`);
                        doc.text("--- ---");
                        doc.text(`Salário Bruto: R$ ${salarioFuncionario.toFixed(2)}`);
                        doc.text("--- ---");
                        doc.text("INSS: R$ " + calcularINSS(salarioFuncionario).toFixed(2));
                        doc.text("Imposto de Renda: R$ " + calcularImpostoRenda(salarioFuncionario).toFixed(2));
                        doc.text(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);
                        doc.text("--- ---");
                        doc.text("Salário Líquido: R$ " + calcularSalarioLiquido(salarioFuncionario).toFixed(2));
                        doc.end()
                    }
                    input.close();
                })

            })
        })
    })
})