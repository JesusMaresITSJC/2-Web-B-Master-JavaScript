const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const productosFiltrados = productos.filter(p => p.precio < 100);
console.log("Productos menores a $100:");
console.log(productosFiltrados);

const productosOrdenados = productosFiltrados.sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
);
console.log("Productos ordenados alfabéticamente:");
console.log(productosOrdenados);

const nombresProductos = productosOrdenados.map(p => p.nombre);
console.log("Nombres de los productos:");
console.log(nombresProductos);