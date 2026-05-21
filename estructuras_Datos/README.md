# Estructuras de Datos

El objetivo de este proyecto es permitir que los estudiantes practiquen conceptos básicos de cómo usar Estructuras de datos sencillas como arreglos y objetos para la solición de problemas del mundo real con JavaScript.
La solución principal a este ejercicio esta dividida en los archivos `app.js` y `compras.js `

## Objetivo

El objetivo de este proyecto es permitir que los estudiantes practiquen conceptos básicos de cómo usar Estructuras de datos sencillas como arreglos y objetos para la solición de problemas del mundo real con JavaScript.

### Problema:
Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.
Instrucciones: 

- Crea un arreglo vacío llamado listaDeCompras.
- Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
- Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
- Implementa una función mostrarLista() que imprima todos los productos de la lista.
- Asegúrate de que no haya productos duplicados en la lista.
- Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.

Nota: Esta es la lista de productos existentes, cualquier otro producto que no se encuentre en esta lista no podrá ser agregado

- "Leche Entera 1L"
- "Pan de Caja Integral"
- "Huevos (Docena)"
- "Café Molido 500g"
- "Manzanas Rojas (1kg)"
- "Arroz Blanco 1kg"
- "Pechuga de Pollo 1kg"
- "Audífonos Inalámbricos"
- "Mouse Óptico Gamer"
- "Teclado Mecánico RGB"
- "Monitor Full HD 24"
- "Cargador Carga Rápida USB-C"
- "Memoria USB 64GB"
- "Café Espresso"
- "Capuccino Grande"
- "Croissant de Jamón y Queso"
- "Muffin de Arándanos"
- "Té Verde Orgánico"

### Solución:
Aquí se dejará la primera solución al ejercicio. Esta incluye un código más "básico" y funcional con lo que pide el ejercicio. 

```
// 1. Crea un arreglo vacío llamado listaDeCompras
let listaDeCompras = [];

// 2. Implementa una función agregarProducto(producto)
const agregarProducto = (producto) => {
    // Validamos que el parámetro sea estrictamente un string
    if (typeof producto !== "string") {
        console.warn("Error: El producto no existe ya que debe ser un texto");
        return;
    }

    // Agrega el nuevo producto al final de la lista
    listaDeCompras.push(producto);
    
    // Ejecutamos la limpieza de duplicados exigida
    eliminarDuplicados();
};

// Función interna para asegurar que no haya productos duplicados 
const eliminarDuplicados = () => {
    const conjuntoSinDuplicados = new Set(listaDeCompras);
    listaDeCompras = [...conjuntoSinDuplicados];
};

// 3. Implementa una función eliminarProducto(producto)
const eliminarProducto = (producto) => {
    // Filtramos para dejar solo los que NO coincidan con el nombre a borrar
    listaDeCompras = listaDeCompras.filter(elemento => elemento !== producto);
};

```
