// Comentário em JS é com duas barras

// VARIÁVEL
let anoAtual = 2025;

// FUNÇÃO 1
function verificarPessoa() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;

  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";

  if (nome === "") {
    document.getElementById("erro").innerText = "Ei! Você esqueceu de digitar o nome 😅";
    return;
  }

  if (idade === "" || idade < 0 || idade > 120) {
    document.getElementById("erro").innerText = "Digite uma idade entre 0 e 120!";
    return;
  }

  idade = Number(idade);
  let anoNascimento = anoAtual - idade;
  let maioridade = idade >= 18 ? "maior de idade" : "menor de idade";

  document.getElementById("resultado").innerText =
    "Olá " + nome + "! Você tem " + idade + " anos, nasceu mais ou menos em " +
    anoNascimento + " e é " + maioridade + ".";
}

// FUNÇÃO 2
function mudarCor() {
  if (document.body.style.backgroundColor === "lightyellow") {
    document.body.style.backgroundColor = "#f0f8ff";
  } else {
    document.body.style.backgroundColor = "lightyellow";
  }
}