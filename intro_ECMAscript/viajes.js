// Array para guardar los destinos
const destinos = [];

// Objetos de destinos y transporte
const costosDestino = {
    "Paris": 500, 
    "Londres": 400, 
    "New York": 600, 
    "Roma": 450, 
    "Madrid": 420, 
    "Tokio": 800, 
    "Cancún": 350, 
    "Oaxaca": 200
};

const costosTransporte = {
    "Avión": 200, 
    "Tren": 100, 
    "Autobús": 50, 
    "Barco": 150, 
    "Automóvil": 30
};

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // Verificamos que el destino exista dentro del objeto de destinos
    if (!(destino in costosDestino)) {
        // Si no existe se detiene el flujo
        console.warn(`Error: El destino "${destino}" no está registrado.`);
        return; 
    }

    // En caso de que los destinos existan, creamos el objeto
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    // Agregamos el objeto al arreglo de destinos
    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte) => {
    // Verificamos que el destino exista dentro del objeto de destinos
    if (!(destino in costosDestino)) {
        // Si no existe se detiene el flujo y devolvenos cero al costo
        return 0;
    }

    // Agregamos a variables el costo y costo adicional
    const costoBase = costosDestino[destino];
    const costoAdicional = costosTransporte[transporte] || 0; 

    // Realizamos la suma y devolvemos el valor
    return costoBase + costoAdicional;
};


// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // Usamos el metodo forEach para recorrer cada elemento
    destinos.forEach(viaje => {
        // Destructuramos cada objeto y recuperamos los valores de cada método
        const { destino, fecha, transporte, costo } = viaje;

        // Imprimimos la información de cada destino
        console.log(`
            ---------------
            INFORMACIÓN DEL DESTINO:
            Destino: ${destino}
            Fecha: ${fecha}
            Transporte: ${transporte}
            Costo: $${costo}
            ---------------
        `);
    });
};