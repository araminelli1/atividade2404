function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    const resultado = document.getElementById('resultado');
    let soma = 0;
  
    if (isNaN(limite) || limite < 1) {
      resultado.innerText = 'Por favor, insira um número válido (maior ou igual a 1).';
      return;
    }
  
    for (let i = 1; i <= limite; i++) {
      if (i % 2 === 0) {
        soma += i;
      }
    }
  
    resultado.innerText = `A soma dos números pares de 1 até ${limite} é: ${soma}`;
  }
  