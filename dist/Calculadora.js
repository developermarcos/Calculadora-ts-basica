"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(Calculo) {
        this.first = Calculo.first;
        this.second = Calculo.second;
        this.operador = Calculo.operador;
    }
    Resultado() {
        if (this.operador == "/" && this.second == 0)
            return 0;
        switch (this.operador) {
            case "+": return this.first + this.second;
            case "-": return this.first - this.second;
            case "*": return this.first * this.second;
            case "/": return this.first / this.second;
            default: return 0;
        }
    }
}
exports.Calculadora = Calculadora;
