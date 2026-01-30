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
    console.log("Eres increible")
}else if(calificacion >= 6){
    console.log("Pasaste")
}else{
    console.log("Reprobado")
}

//operadores logicos
// and (y) - && , or (o) - ||, not (negacion) - !

if(edad >= 18 && tieneINE){
    console.log("Puedes votar");
}else{
    console.log("No puedes votar");
}