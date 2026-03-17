export const calcularCosto = (destino, transporte, personas = 1) => {
    const costosDestino = {
        Paris: 500,
        Londres: 400,
        "New York": 600
    };

    const costosTransporte = {
        "Avión": 200,
        "Tren": 100
    };

    let costoBase = costosDestino[destino] || 300;
    let costoTransporte = costosTransporte[transporte] || 50;

    let total = (costoBase + costoTransporte) * personas;

    if (personas >= 4) {
        total *= 0.9; 
    }

    return total;
};