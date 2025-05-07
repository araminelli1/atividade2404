function validarCPF() {
  const cpfInput = document.getElementById("cpf").value;
  const resultado = document.getElementById("resultado");

  const cpf = cpfInput.replace(/[^\d]/g, "");

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    resultado.textContent = "CPF inválido.";
    return;
  }

  const calcularDigito = (base, fator) => {
    let total = 0;
    for (let i = 0; i < base.length; i++) {
      total += parseInt(base[i]) * (fator - i);
    }
    let resto = (total * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  const digito1 = calcularDigito(cpf.slice(0, 9), 10);
  const digito2 = calcularDigito(cpf.slice(0, 10), 11);

  if (digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10])) {
    resultado.textContent = "CPF válido.";
  } else {
    resultado.textContent = "CPF inválido.";
  }
}
