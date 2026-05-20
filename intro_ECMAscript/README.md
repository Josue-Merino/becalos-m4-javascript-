# Introducción a JavaScript

Este proyecto es un planificador simple de viajes que permite a los usuarios registrar destinos y fechas, así como calcular el costo total de un viaje.
En este proyecto, practicarás los conceptos relacionadow con el tema de ECMAScript que has visto hasta este momento.
La solución a este ejercicio esta dividida en el `app.js` y `viajes.js `

## Objetivo

El objetivo de este proyecto es permitir que los estudiantes practiquen conceptos básicos de JavaScript, y luego puedan aplicar las nuevas características de ECMAScript (ES6 y posteriores) para mejorar el código, tal como se describió en los ejercicios previos.

### Problema:
Imagina que eres parte del equipo encargado de actualizar una aplicación antigua (la cual se muestra en el documento adjunto) para planificar viajes. Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar, y calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte que elijan.

Instrucciones: 

- En primer lugar, entender el flujo básico de la aplicación existente: Registrar destinos, Calcular el costy Mostrar el itinerario.
- Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.
- Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.
- Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.
- A continuación, deberás convertir algunas partes del código a ECMAScript(6).
- Reemplazar Funciones tradicionales por Funciones de flecha donde consideres necesario.
- Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y `const` para las que no cambiarán (como el arreglo de destinos).
- Divide el código en módulos (en archivos) para separar la lógica de gestión de viajes de la interacción con el usuario.
- Opcionalmente podrías extender la funcionalidad del sistema. Por ejemplo puedes agregar más destinos, más opciones de transporte o calcular descuentos de acuerdo al número de personas en el viaje. Usa tu creatividad para practicar lo aprendido.

Código base:

```
### Código Inicial
// viajes.js

// Array para guardar los destinos
var destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    var nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte) {
    var costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (var i = 0; i < destinos.length; i++) {
        var viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}

// app.js

// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();

```