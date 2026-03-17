//Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
//Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
//Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

let librosLeidos = []; 

console.log("-----Libros----");

agregarLibro("Tomie vol.1");
agregarLibro("Tomie vol.2");
agregarLibro("La Odisea");

mostrarLibrosLeidos();

function agregarLibro(titulo) { 
        librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    if(librosLeidos.length === 0){
        console.log("No has agregado libros :(");
    }else{
        console.log("libros Leidos:")
        for(let i=0; i<librosLeidos.length; i++){
            console.log(librosLeidos[i]);
        }
    }
}
