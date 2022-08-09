import { Calculadora } from "./Calculadora.js";
//Data binding
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("resultado");
const divHistorico = document.getElementById("historico");
const txtPrimeiroValor = document.getElementById("numero1");
const txtSegundoValor = document.getElementById("numero2");
const txtoperador = document.getElementById("operacoes");
const calculadora = new Calculadora();
//Calcular
btnCalcular === null || btnCalcular === void 0 ? void 0 : btnCalcular.addEventListener('click', RealizarAlteracao);
function RealizarAlteracao() {
    const calculo = {
        first: Number(txtPrimeiroValor.value),
        second: Number(txtSegundoValor.value),
        operador: txtoperador.options[txtoperador.selectedIndex].value
    };
    calculadora.first = Number(txtPrimeiroValor.value);
    calculadora.second = Number(txtSegundoValor.value),
        calculadora.operador = txtoperador.options[txtoperador.selectedIndex].value;
    const resultado = calculadora.Resultado();
    txtResultado.innerHTML = resultado.toString();
    AtualizarHistorico(calculadora.ListarHistorico());
}
function AtualizarHistorico(historio) {
    divHistorico.innerHTML = "";
    historio.forEach(function (value) {
        console.log("aqui");
        divHistorico.innerHTML += ("<p>" + value + "</p>");
    });
}
