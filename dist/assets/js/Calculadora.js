export class Calculadora {
    constructor() {
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
        return resultado;
    }
    ObterHistorico() {
        return this.historico;
    }
}
