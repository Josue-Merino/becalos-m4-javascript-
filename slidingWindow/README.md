
# Algoritmo Sliding Window

La técnica de Sliding Window es poderosa y eficiente para resolver problemas donde se analizan subconjuntos continuos de datos.
La solución a este ejercicio esta en el archivo `ventana.js`.

## Objetivo

Usar la técnica Sliding Window para identificar la palabra más larga en una cadena de texto.

### Problema:
Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. Este problema simplifica la lógica para que los alumnos practiquen cómo manejar cadenas de texto con ventanas deslizantes.
Instrucciones: 
- Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
- Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
- Devuelve la palabra más larga al final del proceso.
