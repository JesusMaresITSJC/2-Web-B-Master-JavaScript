// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base: si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }


    return findGift(gifts, giftName, index + 1);
}

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));