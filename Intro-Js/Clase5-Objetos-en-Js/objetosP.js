    //proyecto clase 5
    //Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
    /* 
    Instrucciones para resolver el problema:
    Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, 
    autor: (string) el autor del libro, 
    anio: (number) el año de publicación, 
    estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
    También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. 
    Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
    Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que 
    permitan agregar y eliminar capítulos del libro.
    */

    const Libro = {

    //propiedades
    titulo: 'Junji Ito Masterpiece Collection N.1',
    autor: 'Junji Ito',
    anio: 2025,
    estado: 'disponible',

    //capitulos del Libro
    capitulos: ['Tomie', 'Tomie Parte 2', 'El Sotano', 'La Foto', 'El Beso'],

    //metodo que muestra la informacion
    mostrarInfo(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio} el estado es:${this.estado}`);
    }, 

    //metodo que liste los capitulos
    mostrarCapitulos(){
        this.capitulos.forEach((ep, i) => {
            console.log(`${i + 1}. ${ep}`);
        })
    },

    //agregar un capitulo
    agregarCapitulo(titulo){
        this.capitulos.push(titulo);
        console.log(`capitulo agregado: ${titulo}`);
    },

    //eliminar capitulo
    eliminarCapitulo(){
        this.capitulos.pop();
        console.log('Capitulo borrado');
    }
}

Libro.mostrarInfo();
Libro.mostrarCapitulos();
Libro.agregarCapitulo('La mansion');
Libro.mostrarCapitulos();
Libro.eliminarCapitulo();
Libro.mostrarCapitulos();