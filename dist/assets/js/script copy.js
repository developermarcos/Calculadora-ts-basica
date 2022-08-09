let OperacoesHistorico;
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
//Calcular
btnCalcular === null || btnCalcular === void 0 ? void 0 : btnCalcular.addEventListener('click', RealizarAlteracao);
function RealizarAlteracao() {
    let [numero1, numero2, operacao] = ObterDados();
    const dados = {
        first: parseFloat(numero1),
        second: parseFloat(numero2),
        operation: operacao
    };
    let teste = dados.first.toString() + ' + ' + dados.first.toString() + ' = ' + Calcular(dados);
    OperacoesHistorico.historico.push(teste);
    OperacoesHistorico.historico.forEach(function (value) {
        console.log(value);
    });
    AtualizarResultado(Calcular(dados));
}
function AtualizarResultado(resultadoCalculo) {
    resultado.innerHTML = resultadoCalculo.toString();
}
function Calcular(Dados) {
    switch (Dados.operation) {
        case "+":
            return Dados.first + Dados.second;
        case "-":
            return Dados.first - Dados.second;
        case "*":
            return Dados.first * Dados.second;
        case "/":
            return Dados.first / Dados.second;
        default:
            return 0;
    }
}
function ObterDados() {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let operacao = document.getElementById("operacoes");
    return [numero1.value, numero2.value, operacao.options[operacao.selectedIndex].value];
}
export {};
//Apresentar resultado
