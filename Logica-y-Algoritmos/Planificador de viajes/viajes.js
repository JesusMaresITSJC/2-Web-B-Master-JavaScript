import { calcularCosto } from './costos.js';

const destinos = [];

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

export const mostrarItinerario = () => {
    destinos.forEach((viaje, index) => {
        console.log(`Viaje #${index + 1}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};