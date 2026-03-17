//condicional if, else y if else
let edad = 18;
let tieneINE = true;
//condicion que queremos que se cumpla
if(edad >= 18){
    console.log("eres mayor de edad"); // se ejecuta si es true - verdadero 
}else{
    console.log("eres menor de edad"); // si no es verdadero se ejecuta 
}

let calificacion = 5;

if(calificacion >=9){
    console.log("Eres increible");
}else if(calificacion >= 6){
    console.log("Pasaste");
}else{
    console.log("Reprobado");
}

//operadores logicos
// and (y) - && , or (o) - ||, not (negacion) - !

if(edad >= 18 && tieneINE){
    console.log("Puedes votar");
}else{
    console.log("No puedes votar");
}

// Si queremos preguntar si es divisible o no entre 2 
if (numero % 2 === 0){
    console.log('Es divisible entre 2')
}else {
    console.log('No es divisible entre 2')
}

console.log()
5
let esPremium = true;
let totalCompra = 350;
let esFinDeSemana = false;

if (esPremium || (totalCompra > 1000 && esFinDeSemana )){
    console.log('Descuento aplicado')
} else {
    console.log('No aplica el descuento')
}