import './style.css';

// Elementos del DOM
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const intentosTexto = document.getElementById('intentos');
const dificultad = document.getElementById('dificultad');
const descripcion = document.getElementById('descripcion');
const historial = document.getElementById('historial');
const botonTema = document.getElementById('tema');

// Variables
let limiteMaximo = parseInt(dificultad.value);
let numeroSecreto = generarNumero();
let intentos = 0;

// Generar número aleatorio
function generarNumero() {
  return Math.floor(Math.random() * limiteMaximo) + 1;
}

// Cambiar dificultad
dificultad.addEventListener('change', () => {

  limiteMaximo = parseInt(dificultad.value);

  descripcion.textContent =
    `Adivina un número entre 1 y ${limiteMaximo}`;

  reiniciarJuego();
});

// Evento adivinar
botonAdivinar.addEventListener('click', () => {

  const numeroJugador = parseInt(inputNumero.value);

  // Validación
  if (
    isNaN(numeroJugador) ||
    numeroJugador < 1 ||
    numeroJugador > limiteMaximo
  ) {

    mensaje.textContent =
      `Ingresa un número entre 1 y ${limiteMaximo}`;

    mensaje.style.color = 'red';

    return;
  }

  intentos++;

  intentosTexto.textContent =
    `Intentos: ${intentos}`;

  // Crear elemento visual del intento
  const intentoElemento = document.createElement('div');

  intentoElemento.classList.add('intento');

  intentoElemento.textContent = numeroJugador;

  // Comparaciones
  if (numeroJugador === numeroSecreto) {

    mensaje.textContent =
      `¡Correcto! El número era ${numeroSecreto}`;

    mensaje.style.color = 'green';

    intentoElemento.classList.add('correcto');

  } else if (numeroJugador < numeroSecreto) {

    mensaje.textContent =
      'El número es más alto';

    mensaje.style.color = 'blue';

    intentoElemento.classList.add('bajo');

  } else {

    mensaje.textContent =
      'El número es más bajo';

    mensaje.style.color = 'orange';

    intentoElemento.classList.add('alto');
  }

  // Agregar al historial
  historial.appendChild(intentoElemento);

  inputNumero.value = '';
});

// Reiniciar
botonReiniciar.addEventListener('click', reiniciarJuego);

function reiniciarJuego() {

  numeroSecreto = generarNumero();

  intentos = 0;

  mensaje.textContent = '';

  intentosTexto.textContent = '';

  historial.innerHTML = '';

  inputNumero.value = '';

  inputNumero.focus();
}

// Texto inicial
descripcion.textContent =
  `Adivina un número entre 1 y ${limiteMaximo}`;

  // Tema oscuro
let modoOscuro = false;

botonTema.addEventListener('click', () => {

  modoOscuro = !modoOscuro;

  document.body.classList.toggle('dark');

  // Cambiar icono
  if (modoOscuro) {

    botonTema.textContent = '☀️';

  } else {

    botonTema.textContent = '🌙';
  }
});