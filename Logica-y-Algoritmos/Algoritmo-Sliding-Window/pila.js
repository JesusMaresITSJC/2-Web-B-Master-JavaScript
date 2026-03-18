//crear una clase llamada pila

class Pila {
    //metodo constructor 
    constructor(){
        this.elementos = [];
    }

    //metodo para agregar un elemento (push)
    agregarElemento(valor){
        this.elementos.push(valor);
    }

    //metodo para quitar el ultimo elemento (pop)
    quitarElemento(){
        return this.elementos.pop();
    }

    //acceder al ultimo valor
    verUltimoElemento(){
        return this.elementos[this.agregarElemento.length-1];
    }

    //metodo para ver si esta vacia 
    estaVacia(){
        return this.elementos.length===0;
    }

    //mostrar los elementos
    mostrarPila(){
        return this.elementos;
    }
}

let pila = new Pila();

pila.agregarElemento(20);
pila.agregarElemento(10);
pila.agregarElemento(5);
pila.agregarElemento(48);

console.log(pila.mostrarPila());

console.log(pila.verUltimoElemento());
console.log(pila.quitarElemento());
console.log(pila.mostrarPila());
console.log(pila.estaVacia());


