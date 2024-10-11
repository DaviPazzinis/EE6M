// Interatividade dos botões de FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Fecha todos os outros FAQs abertos
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    // Abre o FAQ clicado
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const moduleItems = document.querySelectorAll(
    ".module-container .module-item"
  );

  moduleItems.forEach((item) => {
    const question = item.querySelector(".module-question");
    const answer = item.querySelector(".module-answer");

    question.addEventListener("click", () => {
      // Fechar todas as respostas ativas
      moduleItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".module-answer").style.maxHeight = "0"; // Definir altura como 0 ao fechar
        }
      });

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        // Calcular a altura do conteúdo e aplicar a transição
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0"; // Voltar para altura 0 quando fechado
      }
    });
  });
});
