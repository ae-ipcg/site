const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    "Este serviço não está disponível no momento! Continue contribuindo para o crescimento colectivo.";
  formMessage.style.display = "block";

  contactForm.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
