import { registrarDestino, obtenerViajes } from './viajes.js';

const form = document.getElementById("formViaje");
const contenedor = document.getElementById("itinerario");

const mostrarItinerario = () => {
    contenedor.innerHTML = "";

    const viajes = obtenerViajes();

    viajes.forEach((viaje, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p><strong>Viaje #${index + 1}</strong></p>
            <p>Destino: ${viaje.destino}</p>
            <p>Fecha: ${viaje.fecha}</p>
            <p>Transporte: ${viaje.transporte}</p>
            <p>Personas: ${viaje.personas}</p>
            <p>Costo: $${viaje.costo}</p>
            <hr>
        `;

        contenedor.appendChild(div);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;
    const personas = parseInt(document.getElementById("personas").value);

    registrarDestino(destino, fecha, transporte, personas);

    mostrarItinerario();

    form.reset();
});