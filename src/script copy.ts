import {Calculadora} from "./Calculadora.js";

type Dados = {first : number, second : number, operation : string}

type Historico = {historico : string[]}

let OperacoesHistorico : Historico

const btnCalcular = <HTMLInputElement> document.getElementById("btnCalcular");

const resultado = <HTMLParagraphElement> document.getElementById("resultado");

//Calcular
btnCalcular?.addEventListener('click', RealizarAlteracao);

function RealizarAlteracao() : void{
  let [numero1, numero2, operacao] = ObterDados();
  
  const dados : Dados = {
    first: parseFloat(numero1),
    second: parseFloat(numero2),
    operation: operacao
  }
  let teste : string = dados.first.toString()+' + '+ dados.first.toString()+' = '+Calcular(dados);
  OperacoesHistorico.historico.push(teste);

  OperacoesHistorico.historico.forEach(function (value) {
    console.log(value);
  }); 
  AtualizarResultado(Calcular(dados));
}

function AtualizarResultado(resultadoCalculo : number) : void{
  resultado.innerHTML = resultadoCalculo.toString();
}

function Calcular(Dados : Dados) : number{
  switch(Dados.operation){
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

function ObterDados(): string[]{
  let numero1 = <HTMLInputElement> document.getElementById("numero1");
  let numero2 = <HTMLInputElement> document.getElementById("numero2");
  let operacao = <HTMLSelectElement> document.getElementById("operacoes");

  return [numero1.value, numero2.value, operacao.options[operacao.selectedIndex].value];
}
//Apresentar resultado