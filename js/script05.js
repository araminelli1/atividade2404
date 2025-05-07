const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(palpite) || palpite < 1 || palpite > 10) {
    resultado.textContent = "Digite um número válido entre 1 e 10.";
    return;
  }

  if (palpite === numeroSecreto) {
    resultado.textContent = "Parabéns! Você acertou!";
  } else if (palpite < numeroSecreto) {
    resultado.textContent = "Tente um número maior.";
  } else {
    resultado.textContent = "Tente um número menor.";
  }
}
