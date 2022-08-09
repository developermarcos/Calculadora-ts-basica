import { Calculadora } from "./Calculadora.js";

//Data binding
const btnCalcular = document.getElementById("btnCalcular") as HTMLInputElement;
const txtResultado = document.getElementById("resultado") as HTMLParagraphElement;
const divHistorico = document.getElementById("historico") as HTMLDivElement;

const txtPrimeiroValor = document.getElementById("numero1") as HTMLInputElement;
const txtSegundoValor = document.getElementById("numero2") as HTMLInputElement;
const txtoperador = document.getElementById("operacoes") as HTMLSelectElement;

const calculadora = new Calculadora();

//Calcular
btnCalcular?.addEventListener('click', RealizarAlteracao);

function RealizarAlteracao() : void{
  
  const calculo ={
    first : Number(txtPrimeiroValor.value),
    second : Number(txtSegundoValor.value),
    operador : txtoperador.options[txtoperador.selectedIndex].value
  }
  
  calculadora.first = Number(txtPrimeiroValor.value);
  calculadora.second = Number(txtSegundoValor.value),
  calculadora.operador = txtoperador.options[txtoperador.selectedIndex].value;

  const resultado : number  = calculadora.Resultado();

  txtResultado.innerHTML = resultado.toString();

  AtualizarHistorico(calculadora.ListarHistorico());
}

function AtualizarHistorico(historio : string[]) {
  divHistorico.innerHTML = "";
  historio.forEach(function (value) {
    console.log("aqui");
    divHistorico.innerHTML += ("<p>" + value + "</p>");
  }); 

}
