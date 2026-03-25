// Funcion de countdown 

function countdown(n){
    //Caso base: cuando n llega a 0, termina 

    console.log('Entrando con n =', n)
    if(n === 0){
        console.log('Caso base alcanzado');
        return;
    }

    //Accion actual 
    console.log(n);

    //Llamada recursiva (Reducimos el problema)
    countdown(n-1);
    console.log('Saliendo de n =', n)

}

countdown(5);