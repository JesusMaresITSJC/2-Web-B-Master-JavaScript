//guardar datos
console.log("Hola, me llamo Jesus");
console.log('Como te llamas?');

//mostrar datos - alertas, document write
let nombre = prompt("Como te llamas");
//console.log(nombre);
//document.write(nombre);
alert(nombre);

let fecha = prompt("Cuando es tu cumpleaños?");
//console.log(fecha);
//document.write(fecha);
alert(fecha);

let mascotas = prompt("Cuantas mascotas tienes?");
//console.log(mascotas);
//document.write(mascotas);
alert(mascotas);

//ejercio 
//preguntar cuantos perros tiene
let perros = prompt("Cuantos perros tienes?");

//cuantos gatos tiene
let gatos = prompt("Cuantos gatos tienes?");

//conversion de tipo numerico usando parseInt - mas tolerable util cuando el usuario escribe texto
perros = parseInt(perros);
gatos = parseInt(gatos);

//conversion de tipo numerico usando number - esto es de forma estricta falla si hay texto mezclado
let hermanos = Number(prompt("Cuantos hermanos tienes?"));
let hermanas = Number(prompt("Cuantos hermanas tienes?"));

//mostrar la respuesta: Tienes en total x mascotas
let Tmascotas = perros + gatos;
let Thermanos = hermanos + hermanas;

//imprimir resultados
console.log("en total tienes: " +Tmascotas +" Mascotas");
console.log("en total tienes: " +Thermanos +" Hermanos");