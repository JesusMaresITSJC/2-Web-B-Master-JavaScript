// Importamos Zod
const { z } = window.Zod;

//Esquema de validación
const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

//Referencias
const form = document.getElementById("registerForm");

//Mostrar errores
function mostrarErrores(errors) {
  // Limpiar errores previos
  document.getElementById("error-name").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-password").textContent = "";

  errors.forEach(err => {
    const campo = err.path[0];
    document.getElementById(`error-${campo}`).textContent = err.message;
  });
}

//Validación en tiempo real
function validarCampo() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  const result = registerSchema.safeParse(formData);

  if (!result.success) {
    mostrarErrores(result.error.errors);
  } else {
    mostrarErrores([]); // limpia errores
  }
}

// Eventos en tiempo real
document.getElementById("name").addEventListener("input", validarCampo);
document.getElementById("email").addEventListener("input", validarCampo);
document.getElementById("password").addEventListener("input", validarCampo);

//Envío del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  const result = registerSchema.safeParse(formData);

  if (!result.success) {
    mostrarErrores(result.error.errors);
    return;
  }

  alert("¡Registro exitoso!");
});