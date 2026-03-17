import { registrarDestino, mostrarItinerario } from './viajes.js';

const iniciarApp = () => {

    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 4);
    registrarDestino("New York", "2024-08-10", "Avión", 1);

    mostrarItinerario();
};

iniciarApp();