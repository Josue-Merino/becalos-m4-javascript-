import { registrarDestino, mostrarItinerario } from './viajes.js'

function iniciarApp() {

    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2026-06-15", "Avión");
    registrarDestino("Londres", "2026-07-01", "Tren");
    registrarDestino("Roma", "2026-05-10", "Avión");
    registrarDestino("Madrid", "2026-08-22", "Autobús");
    registrarDestino("Berlín", "2026-09-05", "Tren");
    registrarDestino("Ámsterdam", "2026-10-12", "Avión");
        
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();