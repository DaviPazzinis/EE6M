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

// Inicialização do Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true, // Loop infinito das imagens
  autoplay: {
    delay: 1500, // 1.5 segundos de intervalo entre as transições
    disableOnInteraction: false, // Continua passando automaticamente mesmo após interação
  },
  slidesPerView: 1, // Mostra uma imagem por vez
  spaceBetween: 20, // Espaçamento entre as imagens
  effect: "slide", // Efeito de transição simples
});
