const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Si coinciden, devuelve el par
        if(arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]]
            // Si no, avanza los punteros
        } else {
            inicio++;
            siguiente++
        }
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

