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