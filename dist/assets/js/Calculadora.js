export class Calculadora {
    constructor() {
        // this.historico = JSON.parse(localStorage.getItem('historico') || '[]');
        this.historico = [];
    }
    Resultado(Calculo) {
        let resultado = 0;
        if (Calculo.operador == "/" && Calculo.second == 0)
            resultado;
        switch (Calculo.operador) {
            case "+":
                resultado = Calculo.first + Calculo.second;
                break;
            case "-":
                resultado = Calculo.first - Calculo.second;
                break;
            case "*":
                resultado = Calculo.first * Calculo.second;
                break;
            case "/":
                resultado = Calculo.first / Calculo.second;
                break;
        }
        let operacao = `${Calculo.first} ${Calculo.operador} ${Calculo.second} = ${resultado}`;
        this.historico.push(operacao);
        this.SalvarHistoricoLocalStorage(operacao);
        return resultado;
    }
    OperacoesRealizadas() {
        return this.historico;
    }
    ObterHistorico() {
        return JSON.parse(localStorage.getItem('historico') || '[]');
    }
    SalvarHistoricoLocalStorage(operacao) {
        let historico = JSON.parse(localStorage.getItem('historico') || '[]');
        historico.push(operacao);
        localStorage.removeItem("historico");
        localStorage.setItem('historico', JSON.stringify(historico));
    }
}
