export class Calculadora{
  
  private historico : string[];

  constructor(){
    this.historico = [];
  }

  Resultado(Calculo : {first: number, second : number, operador : string}) : number{

    let resultado : number = 0;

    if(Calculo.operador == "/" && Calculo.second == 0)
      resultado;

    switch(Calculo.operador){
      case "+": resultado = Calculo.first + Calculo.second; break;
  
      case "-": resultado = Calculo.first - Calculo.second; break;
  
      case "*": resultado = Calculo.first * Calculo.second; break;
  
      case "/": resultado = Calculo.first / Calculo.second; break;
    }

    let operacao = `${Calculo.first} ${Calculo.operador} ${Calculo.second} = ${resultado}`;
    
    this.historico.push(operacao);

    return resultado;
  }
  
  ObterHistorico() : string[]{
    return this.historico;
  }
}