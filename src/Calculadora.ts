export class Calculadora{
  first? : number;
  second? : number;
  operador?: string;
  private historico : string[];

  constructor(Calculo? : {first: number, second : number, operador : string}){
    this.first = Calculo?.first;
    this.second = Calculo?.second;
    this.operador = Calculo?.operador;
    this.historico = [];
  }

  Resultado() : number{

    if(!this.first || !this.second || !this.operador)
      return 0;
    let resultado : number = 0;

    if(this.operador == "/" && this.second == 0)
      resultado;

    switch(this.operador){
      case "+": resultado = this.first + this.second; break;
  
      case "-": resultado = this.first - this.second; break;
  
      case "*": resultado = this.first * this.second; break;
  
      case "/": resultado = this.first / this.second; break;
    }

    let operacao = this.first+" "+this.operador+" "+this.second+" : "+resultado;
    
    this.historico.push(operacao);

    return resultado;
  }
  
  ListarHistorico() : string[]{
    return this.historico;
  }
}