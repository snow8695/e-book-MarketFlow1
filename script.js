const SENHA_CORRETA = "ACESSO14";

const modal = document.getElementById("passwordModal");
const abrirModal = document.getElementById("openModal");
const fecharModal = document.getElementById("closeModal");
const formulario = document.getElementById("passwordForm");
const campoSenha = document.getElementById("password");
const mensagemErro = document.getElementById("error");

const inicio = document.getElementById("home");
const ebook = document.getElementById("ebook");
const voltar = document.getElementById("backButton");

// Abrir a janela de senha
abrirModal.addEventListener("click", () => {
  modal.classList.add("open");
  campoSenha.value = "";
  mensagemErro.textContent = "";
  campoSenha.focus();
});

// Fechar a janela
fecharModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("open");
  }
});

// Verificar a senha
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (campoSenha.value === SENHA_CORRETA) {
    modal.classList.remove("open");

    inicio.style.display = "none";
    ebook.classList.add("show");

    mensagemErro.textContent = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    mensagemErro.textContent =
      "Senha incorreta. Tente novamente.";

    campoSenha.select();
  }
});

// Voltar para a tela inicial
voltar.addEventListener("click", () => {
  ebook.classList.remove("show");
  inicio.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});