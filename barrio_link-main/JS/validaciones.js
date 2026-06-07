

document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }

      });

    }, {
      threshold: 0.1
    });

    reveals.forEach(el => observer.observe(el));
  }

});


function validateField(id, min = 2) {

  const input = document.getElementById(id);
  const group = document.getElementById("fg-" + id);

  if (!input || !group) return true;

  const valid = input.value.trim().length >= min;

  group.classList.toggle("valid", valid);
  group.classList.toggle("invalid", !valid);

  return valid;
}

function validatePhone() {

  const input = document.getElementById("telefono");
  const group = document.getElementById("fg-telefono");

  if (!input || !group) return true;

  const digits = input.value.replace(/\D/g, "");

  const valid = digits.length >= 10;

  group.classList.toggle("valid", valid);
  group.classList.toggle("invalid", !valid);

  return valid;
}

function validateEmail() {

  const input = document.getElementById("email");
  const group = document.getElementById("fg-email");

  if (!input || !group) return true;

  const value = input.value.trim();

  if (value === "") {
    group.classList.remove("valid", "invalid");
    return true;
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  group.classList.toggle("valid", valid);
  group.classList.toggle("invalid", !valid);

  return valid;
}

function validateRedes() {

  const input = document.getElementById("redes");
  const group = document.getElementById("fg-redes");

  if (!input || !group) return true;

  const value = input.value.trim();

  if (value === "") {
    group.classList.remove("valid", "invalid");
    return true;
  }

  const valid = value.length >= 3;

  group.classList.toggle("valid", valid);
  group.classList.toggle("invalid", !valid);

  return valid;
}


function submitForm(e) {

  e.preventDefault();

  const campos = [
    "nombre",
    "propietario",
    "categoria",
    "horario",
    "direccion",
    "descripcion"
  ];

  let valido = true;

  campos.forEach(campo => {
    if (!validateField(campo)) {
      valido = false;
    }
  });

  if (!validatePhone()) valido = false;
  if (!validateEmail()) valido = false;
  if (!validateRedes()) valido = false;

  if (!valido) return;

  showToast("¡Negocio registrado exitosamente!");

  document.getElementById("registroForm").reset();

  document.querySelectorAll(".form-group").forEach(group => {
    group.classList.remove("valid", "invalid");
  });
}


function showToast(message) {

  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
function filtrar(categoria) {

  const cards = document.querySelectorAll(".lugar-card");

  cards.forEach(card => {

    if (
      categoria === "todos" ||
      card.dataset.categoria === categoria
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });
}


document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modalLugar");

  if (!modal) return;

  const closeBtn = document.querySelector(".close-modal");

  const nombre = document.getElementById("modalNombre");
  const rating = document.getElementById("modalRating");
  const horario = document.getElementById("modalHorario");
  const costo = document.getElementById("modalCosto");
  const direccion = document.getElementById("modalDireccion");
  const info = document.getElementById("modalInfo");

  document.querySelectorAll(".lugar-card").forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

      nombre.textContent = card.dataset.nombre;
      rating.textContent = card.dataset.rating;
      horario.textContent = card.dataset.horario;
      costo.textContent = card.dataset.costo;
      direccion.textContent = card.dataset.direccion;
      info.textContent = card.dataset.info;

      modal.style.display = "flex";
    });

  });

  if (closeBtn) {

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

  }

  window.addEventListener("click", (e) => {

    if (e.target === modal) {
      modal.style.display = "none";
    }

  });

});
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".chip").forEach(chip => {

    chip.addEventListener("click", function() {

      document.querySelectorAll(".chip").forEach(c => {
        c.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});