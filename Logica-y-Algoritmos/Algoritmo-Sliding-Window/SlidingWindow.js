/* 
[2, 1, 5, 1, 3, 2]
ventana de 3
[2, 1, 5]
*/
function obtenerSumaMaxima(arregloNumeros, tamVentana){
    //validar que no este vacia
    if(tamVentana > arregloNumeros.length){
        return null;
    }

    let sumaActualdeVentanas = 0;
    console.log('...Primera Ventana...')

    //1. calculamos la suma de la primera ventana
    for(let i=0; i<tamVentana; i++){
        sumaActualdeVentanas += arregloNumeros[i];
        console.log(`sumando ${arregloNumeros[i]} --> suma actual: ${sumaActualdeVentanas}`);
    }

    let sumaMaximaEncontrada = sumaActualdeVentanas;

    //2. nos movemos a la otra ventana
    for(let i = tamVentana; i<arregloNumeros.length; i++){
        let numeroQueSale = arregloNumeros[i - tamVentana];
        let numeroQueEntra = arregloNumeros[i];

        console.log('...Movemos la ventana...')
        console.log(`Numero que sale: ${numeroQueSale}`);
        console.log(`Numero que entra: ${numeroQueEntra}`);

        //ajustamos a la suma
        sumaActualdeVentanas = sumaActualdeVentanas - numeroQueSale + numeroQueEntra;

        console.log(`Nueva suma actual: ${sumaActualdeVentanas}`);

        //comparamos con el maximo
        if(sumaActualdeVentanas > sumaMaximaEncontrada){
            sumaMaximaEncontrada = sumaActualdeVentanas;
            console.log(`Nuevo numero maximo encontrado ${sumaMaximaEncontrada}`);
        }else{
            console.log(`El maximo encontrado sigue siendo ${sumaMaximaEncontrada}`);
        }
        console.log("______");
    }

    return sumaMaximaEncontrada;
}

let visitasPorMinuto = [10, 23, 2, 49, 50, 1, 3, 2];
let masTrafico = obtenerSumaMaxima(visitasPorMinuto, 3);
console.log(masTrafico); 