// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Si llegamos al final de la lista y no se encontró
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Si encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: Pasamos al siguiente índice (index + 1)
    return findGift(gifts, giftName, index + 1);
}

// Casos de prueba 

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Camión no está en la lista."