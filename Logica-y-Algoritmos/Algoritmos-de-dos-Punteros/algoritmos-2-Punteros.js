function encontrarPar(arr, objetivo){
    //Puntero que inicia al principio de mi arreglo
    let izquierda = 0; 

    //Puntero que inicia al final del arreglo
    let derecha = arr.length -1;

    // Mientras los punteros no se crucen 
    while (izquierda < derecha){

        //Calcular la suma de ambos valores
        let suma = arr[izquierda] + arr[derecha];

        // SI encontramos el objetivo
        if (suma === objetivo){
            //Regresar el par encontrado
            return [arr[izquierda], arr[derecha]];
        } 
        // Si la suma es menor que el objetivo
        else if (suma < objetivo){
            //Nos movemos hacia la izquierda
            izquierda++;
        } else {
            //Si la suma es mayor 
            derecha--;
        }
    }
    return null;
}

let numeros = [2, 4, 7, 10, 11, 15, 20, 40, 80]
let resultado = encontrarPar(numeros,25);
console.log(resultado);

// Ejercicio: Crear una funcion que confirme si un string esPalindromo(string)
// anita lava la tina 
// radar
// palabra extra

function esPalindromo(str) {
    //Convertir todo a minusculas 
    str = str.toLowerCase();

    let izq = 0; 
    let der = str.length -1; 

    while (izq < der){
        //Comparamos cada caracter del lado izq con el el caracter del lado der 
        if(str[izq] !== str[der]){
            return false;
        }
        //Si si coinciden movemos los punteros de izq hacia derecha
        izq++
        //El derecho retrocede hacia la izq
        der--;
    }
    // Encontramos que si es Palindromo
    return true;
}

let palabra = 'javascript';
console.log(esPalindromo(palabra));