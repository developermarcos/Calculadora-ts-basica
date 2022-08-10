import { Calculadora } from "./Calculadora.js";

//Data binding
const btnCalcular = document.getElementById("btnCalcular") as HTMLInputElement;
const txtResultado = document.getElementById("resultado") as HTMLParagraphElement;
const divCalculosRealizados = document.getElementById("calculosRealizadas") as HTMLDivElement;
const divCalculosRealizadosList = document.getElementById("lista-calculos-Realizados") as HTMLDivElement;

const btnMostrarHistorico = document.getElementById("btnMostrarHistorico") as HTMLInputElement;
const divhistorico = document.getElementById("historico") as HTMLDivElement;
const divhistoricoLista = document.getElementById("historico-list") as HTMLDivElement;

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

  AtualizarHistorico(calculadora.OperacoesRealizadas());
}

function AtualizarHistorico(historio : string[]) : void{

  if(historio.length == 0) {
    divCalculosRealizados.style.display = 'none';
    return;
  }
  
  divCalculosRealizados.classList.remove('d-none');

  divCalculosRealizadosList.innerHTML = "";
  
  historio.forEach(function (value) {

    let p = document.createElement("p");

    p.innerHTML = value;

    divCalculosRealizadosList.prepend(p);

  }); 
  
}

// Mostrar histórico
btnMostrarHistorico?.addEventListener('click', MostarHistorico)

function MostarHistorico() : void{

  const historico = calculadora.ObterHistorico();

  if(historico.length == 0) {
    divhistorico.style.display = 'none';
    return;
  }
  
  divhistorico.classList.remove('d-none');

  divhistoricoLista.innerHTML = "";
  
  historico.forEach(function (value) {

    let p = document.createElement("p");

    p.innerHTML = value;

    divhistoricoLista.prepend(p);

  }); 
}