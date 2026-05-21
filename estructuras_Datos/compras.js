// Arreglo de objetos con cada producto y su precio
const productosSupermercado = [
    { nombre: "Leche Entera 1L", precio: 1.50 },
    { nombre: "Pan de Caja Integral", precio: 2.10 },
    { nombre: "Huevos (Docena)", precio: 3.20 },
    { nombre: "Café Molido 500g", precio: 4.80 },
    { nombre: "Manzanas Rojas (1kg)", precio: 2.90 },
    { nombre: "Arroz Blanco 1kg", precio: 1.15 },
    { nombre: "Pechuga de Pollo 1kg", precio: 6.50 },
    { nombre: "Audífonos Inalámbricos", precio: 49.99 },
    { nombre: "Mouse Óptico Gamer", precio: 25.50 },
    { nombre: "Teclado Mecánico RGB", precio: 79.90 },
    { nombre: "Monitor Full HD 24", precio: 129.00 },
    { nombre: "Cargador Carga Rápida USB-C", precio: 15.99 },
    { nombre: "Memoria USB 64GB", precio: 9.50 },
    { nombre: "Café Espresso", precio: 2.00 },
    { nombre: "Capuccino Grande", precio: 3.50 },
    { nombre: "Croissant de Jamón y Queso", precio: 2.75 },
    { nombre: "Muffin de Arándanos", precio: 2.25 },
    { nombre: "Té Verde Orgánico", precio: 1.80 }
];


// Arrgelo de lista de compras
let listaCompras = []


export const agregarProducto = producto => {
    // Verificamos que el producto ingresado exista o no en el arreglo de productosSupermercado
    let existeEnTienda = productosSupermercado.some(objeto => objeto.nombre === producto);
    // Verificamos que el producto ingresado existe o no en el arreglo de listaCompras
    let existeEnListaCompras = listaCompras.some(objeto => objeto.nombre === producto )
    
    // Si el producto no existe en el arreglo de productosSupermercado, mandamos una alerta ya que no es valido o puede no ser un producto
    if (!existeEnTienda) {
        console.warn(`Error: ${producto} no existe o no se encuentra disponible en la tienda`);
        return; 
    }

    // Si el producto existe en el arreglo de productosSupermercado y no esta repetido entonces lo buscamos en el arreglo de productosSupermercado y lo metemos a nuestra lista de compras
    if(!existeEnListaCompras) {
        let productoDeTienda = productosSupermercado.find(objeto => objeto.nombre === producto)
        listaCompras.push(productoDeTienda)
    }   

}


export const mostrarLista = () => {
    // Recorremos el arreglo de lista de compras
    listaCompras.forEach( objeto => {
        // Aplicamos Destructuring para recuperar el nombre y precio del pr0ducto
        const { nombre, precio } = objeto
        // Imprimimos cada uno
        console.log(` --------------`)
        console.log(` Producto en lista: ${nombre}, Precio: ${precio} mxn`)
        console.log(` --------------`)
    })
}

export const eliminarProducto = producto => {
    // Guaramos en una variable un nuevo arreglo sin el elemento a eliminar filtrando mediante el nombre, lo ideal sería con un ID solo que el ejercicio lo pide así
    let listaFiltrada = listaCompras.filter( elemento => elemento.nombre !== producto )
    // Igualamos la lista de compras a la filtrada
    listaCompras = [...listaFiltrada ]
}

