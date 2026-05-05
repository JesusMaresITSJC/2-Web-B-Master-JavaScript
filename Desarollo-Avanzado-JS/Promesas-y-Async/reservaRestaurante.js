// Simulando una base de datos de mesas
const mesasDisponibles = 5;

//Verificar disponibilidad
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Mesas disponibles. Reservando ${mesasSolicitadas} mesa(s)...`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solo hay ${mesasDisponibles}.`);
      }
    }, 2000);
  });
}

//Enviar confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% éxito

      if (exito) {
        resolve(`Correo enviado correctamente a ${nombreCliente}`);
      } else {
        reject("Error al enviar el correo de confirmación");
      }
    }, 1500);
  });
}

//Flujo principal con async/await
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");

    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Enviando confirmación...");

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log("Reserva completada con éxito");

  } catch (error) {
    console.log("Error:", error);
  }
}

//Pruebas
// Caso exitoso
hacerReserva("Juan Pérez", 3);
// Caso error por mesas insuficientes
hacerReserva("Ana López", 10);
// Caso donde puede fallar el correo (aleatorio)
hacerReserva("Carlos Ruiz", 2);