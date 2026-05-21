import { agregarProducto, mostrarLista, eliminarProducto} from './compras.js'


const iniciarApp = () => {
    // Pruebas: Agregamos productos que EXISTEN
    agregarProducto("Café Espresso");
    agregarProducto("Huevos (Docena)");
    agregarProducto("Memoria USB 64GB");
    agregarProducto("Café Espresso"); 
    
    // Pruebas: Agregamos productos que NO EXISTEN
    agregarProducto("Pizza Familiar Pepperoni");
    agregarProducto("Refresco de Cola 2L");
    
    // Eliminamos un producto
    eliminarProducto("Huevos (Docena)");

    // Mostramos todos los productos
    mostrarLista(); 
    
}

iniciarApp()