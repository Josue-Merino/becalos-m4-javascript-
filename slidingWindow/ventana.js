function findLongestWord(text) {
    // Dividir el texto en palabras en un arreglo
    const words = text.split(" ");
    // Inicializar la palabra más larga
    let longestWord = '';

    // Recorrer el arreglo con un ciclo
    for (let i = 0; i < words.length; i++) {
        // Comparar la longitud de la palabra actual con la más larga
        if (words[i].length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
        }

    }
    // Retornar la palabra más larga encontrada
    return longestWord
}
// Texto de prueba
const text = "Javascript es un lenguaje de programación increíble para aprender."

// Invocación a la función para obtener la palabra más larga
console.log(findLongestWord(text)) // --> "programación"