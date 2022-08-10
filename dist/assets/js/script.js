import { Calculadora } from "./Calculadora.js";
//Data binding
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("resultado");
const divHistorico = document.getElementById("historico");
const divHistoricoList = document.getElementById("historico-list");
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
    const resultado = calculadora.Resultado(calculo);
    txtResultado.innerHTML = resultado.toString();
    AtualizarHistorico(calculadora.ObterHistorico());
}
function AtualizarHistorico(historio) {
    if (historio.length == 0) {
        divHistorico.style.display = 'none';
        return;
    }
    divHistorico.classList.remove('d-none');
    divHistoricoList.innerHTML = "";
    historio.forEach(function (value) {
        let p = document.createElement("p");
        p.innerHTML = value;
        divHistoricoList.prepend(p);
    });
}
