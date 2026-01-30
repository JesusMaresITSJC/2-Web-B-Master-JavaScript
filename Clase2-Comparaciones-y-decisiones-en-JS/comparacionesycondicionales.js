/* Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. 
Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba. */

let calificacion = prompt("Que calificacion tienes(100-0)? ");
//let calificacion = 0; 

calificacion = parseInt(calificacion);

if(calificacion >=90){
    console.log("Nota: Excelente");
}else if(calificacion >= 75){
    console.log("Nota: Bien");
}else if(calificacion >= 60){
    console.log("Nota: Suficiente");
}else{
    console.log("Reprobado");
}