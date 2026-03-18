//FIFO - primero en entrar primero en salir

class Cola{
    constructor(){
        this.elementos =[];
    }

    //metodo para agregar al final
    agregarElemento(valor){
        this.elementos.push(valor);
    }

    //metodo para quitar el primero
    quitarElemento(){
        return this.elementos.shift();
    }

    //ver el primero
    verPrimero(){
        return this.elementos[0];
    }

    //esta vacia
    estaVacia(){
        return this.elementos.length === 0;
    }

    //mostrar cola
    mostrarCola(){
        return this.elementos;
    }
}

let filaTortillas = new Cola();

filaTortillas.agregarElemento('Lupita');
filaTortillas.agregarElemento('Luis');
filaTortillas.agregarElemento('Paty');
filaTortillas.agregarElemento('Paola');

console.log(filaTortillas.mostrarCola());


console.log(filaTortillas.verPrimero());
console.log(filaTortillas.quitarElemento());
console.log(filaTortillas.mostrarCola());
console.log(filaTortillas.estaVacia()); 