export class Calculadora{
  
  private historico : string[];
  
  constructor(){
    // this.historico = JSON.parse(localStorage.getItem('historico') || '[]');
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

    this.SalvarHistoricoLocalStorage(operacao);
    
    return resultado;
  }

  OperacoesRealizadas() : string[]{
    return this.historico;
  }
  
  ObterHistorico() : string[]{
    return JSON.parse(localStorage.getItem('historico') || '[]');
  }

  SalvarHistoricoLocalStorage(operacao : string) : void{

    let historico = JSON.parse(localStorage.getItem('historico') || '[]');
    
    historico.push(operacao);

    localStorage.removeItem("historico");

    localStorage.setItem('historico', JSON.stringify(historico));
  }
}