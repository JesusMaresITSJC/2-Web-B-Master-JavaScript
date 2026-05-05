document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const archivo = document.getElementById('archivo').files[0];

  //VALIDACIONES

  // 1. Nombre mínimo 3 caracteres
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  // 2. Validar correo con includes
  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Correo inválido.");
    return;
  }

  // 3. Teléfono solo números (10 dígitos)
  const regexTel = /^[0-9]{10}$/;
  if (!regexTel.test(telefono)) {
    alert("El teléfono debe tener 10 números.");
    return;
  }

  // 4. Al menos un interés
  if (intereses.length === 0) {
    alert("Selecciona al menos un interés.");
    return;
  }

  // 5. Horario obligatorio
  if (!horario) {
    alert("Selecciona un horario.");
    return;
  }

  // 6. Fecha no puede ser pasada
  const hoy = new Date().toISOString().split("T")[0];
  if (fecha < hoy) {
    alert("No puedes seleccionar una fecha pasada.");
    return;
  }

  // 7. Validar archivo (opcional)
  if (archivo) {
    const tiposPermitidos = ["image/jpeg", "image/png", "application/pdf"];
    if (!tiposPermitidos.includes(archivo.type)) {
      alert("Archivo no válido. Solo JPG, PNG o PDF.");
      return;
    }
  }

  //Éxito
  alert("Registro exitoso");

  console.log({
    nombre,
    correo,
    telefono,
    intereses: [...intereses].map(i => i.value),
    horario: horario.value,
    fecha
  });
});