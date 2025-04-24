function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');
    let classificacao = '';
  
    if (isNaN(idade) || idade < 0) {
      classificacao = 'Por favor, insira uma idade válida.';
    } else if (idade <= 12) {
      classificacao = 'Criança';
    } else if (idade <= 17) {
      classificacao = 'Adolescente';
    } else if (idade <= 59) {
      classificacao = 'Adulto';
    } else {
      classificacao = 'Idoso';
    }
  
    resultado.innerText = `Classificação: ${classificacao}`;
  }
  