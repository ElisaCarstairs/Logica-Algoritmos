const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Calcetines", precio: 35, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 75, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Tablet", precio: 350, categoria: "Electrónica" },
     { nombre: "Impresora", precio: 850, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 280, categoria: "Accesorios" },
    { nombre: "Monitor", precio: 950, categoria: "Electrónica" },
    { nombre: "Calculadora", precio: 95, categoria: "Papelería" }
];
//Primero se filtra por costo
const productosBaratos = productos.filter(producto => producto.precio < 100);
//Ya que filtramos los que entran en el costo, les extraemos el nombre y el costo
const nombresBaratos = productosBaratos.map(producto => producto.nombre);
const costosBaratos = productosBaratos.map(producto => producto.precio);

console.log('Los productos con costo menor a $100, son:', nombresBaratos);
console.log('Y sus precios son:', costosBaratos);


//Solo reacomoda el arreglo
const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));


console.log('Los productos ordenados alfabeticamente son:', productosOrdenados);

//Extrae solo los nombre, con una nueva función

const nombreProductos = productos.map(producto => producto.nombre);

console.log('Los nombres de todos los productos son:', nombreProductos);

const costoTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log('El costo total de todos los productos es:', costoTotal);

//Primero, extraer categorías de producto para luego ordenarlas
const categoProductos = productos.map(producto => producto.categoria);
//
const Electrónica = categoProductos.find(categoria => categoria === "Electrónica");
console.log('Las categorías de los productos son:', categoProductos);

console.log('La categoría seleccionada que debe mostrarse es', Electrónica); //,Electrónica


const cantidades = () => {
    const cantidades = {};
    productos.forEach(producto => {
        if (!cantidades[producto.categoria]) {
            cantidades[producto.categoria] = 1;
        } else {
            cantidades[producto.categoria]++;
        }
    });
    console.log('Las cantidades de los productos son:', cantidades);
    return cantidades;
}

