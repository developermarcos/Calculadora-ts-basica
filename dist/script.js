"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_js_1 = require("./Calculadora.js");
//Data binding
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("resultado");
const txtPrimeiroValor = document.getElementById("numero1");
const txtSegundoValor = document.getElementById("numero2");
const txtoperador = document.getElementById("operacoes");
//Calcular
btnCalcular === null || btnCalcular === void 0 ? void 0 : btnCalcular.addEventListener('click', RealizarAlteracao);
function RealizarAlteracao() {
    const calculo = {
        first: Number(txtPrimeiroValor.value),
        second: Number(txtSegundoValor.value),
        operador: txtoperador.options[txtoperador.selectedIndex].value
    };
    const calculadora = new Calculadora_js_1.Calculadora(calculo);
    const resultado = calculadora.Resultado();
    txtResultado.innerHTML = resultado.toString();
}
