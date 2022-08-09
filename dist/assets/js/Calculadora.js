export class Calculadora {
    constructor(Calculo) {
        this.first = Calculo === null || Calculo === void 0 ? void 0 : Calculo.first;
        this.second = Calculo === null || Calculo === void 0 ? void 0 : Calculo.second;
        this.operador = Calculo === null || Calculo === void 0 ? void 0 : Calculo.operador;
        this.historico = [];
    }
    Resultado() {
        if (!this.first || !this.second || !this.operador)
            return 0;
        let resultado = 0;
        if (this.operador == "/" && this.second == 0)
            resultado;
        switch (this.operador) {
            case "+":
                resultado = this.first + this.second;
                break;
            case "-":
                resultado = this.first - this.second;
                break;
            case "*":
                resultado = this.first * this.second;
                break;
            case "/":
                resultado = this.first / this.second;
                break;
        }
        let operacao = this.first + " " + this.operador + " " + this.second + " : " + resultado;
        this.historico.push(operacao);
        return resultado;
    }
    ListarHistorico() {
        return this.historico;
    }
}
