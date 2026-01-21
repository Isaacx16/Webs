document.addEventListener("DOMContentLoaded", () => {
  const scrollButtons = document.querySelectorAll("[data-scroll]");
  const form = document.getElementById("lead-form");
  const message = document.getElementById("form-message");

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll");
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = Array.from(form.querySelectorAll("input, select"));
    const isValid = fields.every((field) => field.value.trim() !== "");

    if (!isValid) {
      message.textContent = "Por favor completa todos los campos requeridos.";
      message.style.color = "#d14343";
      return;
    }

    message.textContent =
      "¡Gracias! Hemos recibido tu información. Pronto un asesor te contactará.";
    message.style.color = "#1f9d68";

    form.reset();

    // Preparado para futura conexión a WhatsApp o backend.
    // Ejemplo: enviar datos con fetch o redireccionar a un enlace wa.me.
  });
});

