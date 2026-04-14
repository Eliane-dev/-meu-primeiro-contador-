let numero = 30;
function aumentar() {
 // trava o numero ao chegar em 40
  if (numero < 40) {
    numero = numero + 1;
 // mensagem de limite máximo
     if (numero === 40) {
    alert("Limite máximo de cliques atingido!");
  }
  }

  let elemento = document.getElementById("numero");
  elemento.innerText = numero;

  // muda a cor para vermelho ao chegar em 35
  if (numero >= 35) {
    elemento.style.color = "red";
  }


}
 // diminui os cliques 
function diminuir() {
  numero = numero - 1;
  document.getElementById("numero").innerText = numero;

}

//muda a cor de vermelho para preto ao clicar em zerar
function zerar() {
  numero = 0;
  document.getElementById("numero").innerText = numero;let elemento = document.getElementById("numero");
  elemento.innerText = numero;
    elemento.style.color = "black";
}
