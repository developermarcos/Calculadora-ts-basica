import { Calculadora } from "./Calculadora.js";
//Data binding
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("resultado");
const divCalculosRealizados = document.getElementById("calculosRealizadas");
const divCalculosRealizadosList = document.getElementById("lista-calculos-Realizados");
const btnMostrarHistorico = document.getElementById("btnMostrarHistorico");
const divhistorico = document.getElementById("historico");
const divhistoricoLista = document.getElementById("historico-list");
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
    AtualizarHistorico(calculadora.OperacoesRealizadas());
}
function AtualizarHistorico(historio) {
    if (historio.length == 0) {
        divCalculosRealizados.style.display = 'none';
        return;
    }
    divCalculosRealizados.classList.remove('d-none');
    divCalculosRealizadosList.innerHTML = "";
    historio.forEach(function (value) {
        let p = document.createElement("p");
        p.innerHTML = value;
        divCalculosRealizadosList.prepend(p);
    });
}
// Mostrar histórico
btnMostrarHistorico === null || btnMostrarHistorico === void 0 ? void 0 : btnMostrarHistorico.addEventListener('click', MostarHistorico);
function MostarHistorico() {
    const historico = calculadora.ObterHistorico();
    if (historico.length == 0) {
        divhistorico.style.display = 'none';
        return;
    }
    divhistorico.classList.remove('d-none');
    divhistoricoLista.innerHTML = "";
    historico.forEach(function (value) {
        let p = document.createElement("p");
        p.innerHTML = value;
        divhistoricoLista.prepend(p);
    });
}
