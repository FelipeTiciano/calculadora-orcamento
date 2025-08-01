function calcular() {
  const horas = document.getElementById("horas").value;
  const valorHora = document.getElementById("valorHora").value;
  
  if (horas && valorHora) {
    const total = horas * valorHora;
    document.getElementById("resultado").innerText = `Orçamento estimado: R$ ${total.toFixed(2)}`;
  } else {
    document.getElementById("resultado").innerText = "Preencha todos os campos!";
  }
}