
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


// Usa filter() para obtener los productos que cuesten menos de $100.
const productosBaratos = productos.filter(producto => producto.precio < 100)
console.log(productosBaratos)

// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre))
console.log(productosOrdenados)

// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresProductos = productos.map( producto => producto.nombre )
console.log(nombresProductos)

// Usa reduce()
const precioTotal = productos.reduce((acc, producto) => acc + producto.precio, 0)
console.log(precioTotal)

// Usa some()
const existeProducto = productos.some(producto => producto.precio > 1000)
console.log(existeProducto)

// Usa every()
const haveSameCategory = productos.every(producto => producto.categoria === 'Electrónica')
console.log(haveSameCategory)
