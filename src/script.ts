import { Calculadora } from "./Calculadora.js";

//Data binding
const btnCalcular = document.getElementById("btnCalcular") as HTMLInputElement;
const txtResultado = document.getElementById("resultado") as HTMLParagraphElement;
const divHistorico = document.getElementById("historico") as HTMLDivElement;
const divHistoricoList = document.getElementById("historico-list") as HTMLDivElement;

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
  
  const resultado : number  = calculadora.Resultado(calculo);

  txtResultado.innerHTML = resultado.toString();

  AtualizarHistorico(calculadora.ObterHistorico());
}

function AtualizarHistorico(historio : string[]) : void{

  if(historio.length == 0) {
    divHistorico.style.display = 'none';
    return;
  }
  
  divHistorico.classList.remove('d-none');

  divHistoricoList.innerHTML = "";
  
  historio.forEach(function (value) {

    let p = document.createElement("p");

    p.innerHTML = value;

    divHistoricoList.prepend(p);

  }); 
  
}
