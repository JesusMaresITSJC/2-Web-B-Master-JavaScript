const disco = {
    //propiedades
    titulo: 'Debi Tirar Mas Fotos',
    artista: 'Bad Bunny',
    anio: 2025,
    disponible: true,

    //propiedad de tipo arreglo 
    canciones: ['Nuevayo1', 'Perfumito Nuevo', 'Velada', 'La Mudanza', 'DTMF'],

    //podemos guardar acciones relacionadas con los datos
    //metodo que muestra la informacion
    mostrarInfo(){
        console.log(`${this.titulo}, de ${this.artista} lanzado en ${this.anio}`);
        //this apunta a este objeto (disco)
    }, 

    //metodo que liste las canciones
    mostrarCanciones(){
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1}. ${cancion}`);
        })
    },

    //agregar una cancion
    agregarCancion(titulo){
        this.canciones.push(titulo);
        console.log(`cancion agregada: ${titulo}`);
    },

    //ejercicios
    //eliminar cancion
    eliminarCancion(){
        this.canciones.pop();
        console.log('Cancion borrada');
    },

    //cambiar estado
    cambiarEstado(){
        if(this.disponible === true){
            this.disponible = false;
            console.log(`disco no disponible: ${this.disponible}`);
        }else{
            this.disponible = true;
             console.log(`disco disponible: ${this.disponible}`);
        }
    }
}

    //accede a los datos con notacion de punto
    console.log(disco.artista);
    console.log(disco.canciones);

    //accede a los datos con notacion de corchetes
    console.log(disco['titulo']);
    console.log(disco['disponible']);

    //llamar a nuestro metodo
    disco.mostrarInfo();
    disco.mostrarCanciones();
    disco.agregarCancion('Close friends');
    disco.mostrarCanciones();

    //desestructuracion es sacar cosas de un objeto sin necesidad de escribir  objeto.propiedad
    const { canciones } = disco;
    const [ primera, segunda, tercera ] = canciones;
    console.log(primera);
    console.log(segunda);
    console.log(tercera);

    console.log('destructuracion en una sola linea...');

    const { canciones : [pista1, pista2, pista3] } = disco;
    console.log(pista1);
    console.log(pista2);
    console.log(pista3);

    disco.mostrarCanciones();
    console.log('........')

    //renombrar variables
    const { titulo: nombreDisco, anio: Lanzamiento } = disco;
    //se asiga el valor de la propiedad a una variable con otro nombre
    console.log(nombreDisco);
    console.log(Lanzamiento);

    console.log('........')

    //desestructuracion basica
    const { titulo, artista} = disco;
    console.log(titulo);
    console.log(artista);

    console.log('....Ejercicio....')
    disco.mostrarCanciones();
    //eliminar cancion
    disco.eliminarCancion();
    disco.mostrarCanciones();

    console.log('........')
    //cambiar estado de album
    const { disponible } = disco;
    console.log(disponible);

    disco.cambiarEstado();
    console.log(disco.disponible);



