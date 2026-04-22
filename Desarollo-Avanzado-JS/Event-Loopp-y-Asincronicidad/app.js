const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

function prepararPedido(order) {
    return new Promise((resolve) => {
        // Tiempo aleatorio entre 1 y 5 segundos
        const tiempo = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            resolve(`Pedido #${order.id} listo`);
        }, tiempo);
    });
}

async function processOrder(order) {
    // Espera a que el pedido termine de "prepararse"
    await prepararPedido(order);

    // Actualiza el estado a completado
    order.status = 'Completado';
    updateOrderStatus(order, order.status);
}