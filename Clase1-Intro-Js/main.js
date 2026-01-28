// este es un comentario en Js

// Tipos de datos

//number - numericos : enteros y decimales
let edad = 24;
let precio = 199.99;

console.log("Tipo de dato Number:");
console.log("edad");
console.log("precio");
//retorna el tipo de dato
console.log(typeof edad);
console.log(typeof precio);

//string - texto
let nombre = 'Jesus';
let saludo = 'Hola mundo';

console.log("Tipo de dato string:");
console.log(nombre);
console.log(saludo);
//retorna el tipo de dato
console.log(typeof nombre);
console.log(typeof saludo);

//boolean - verdadero o falso
let esMayordeEdad = true;
let tienePermiso = false;

console.log("Tipo de dato boolean:");
console.log(esMayordeEdad);
console.log(tienePermiso);
//retorna el tipo de dato
console.log(typeof esMayordeEdad);
console.log(typeof tienePermiso);

//undefined - variable declarada sin valor
let telefono;

console.log("Tipo de dato undefined:");
console.log(telefono);

//retorna el tipo de dato
console.log(typeof telefono);

//Null - variable intencionalmente vacio
let direccion = null;
console.log("Tipo de dato Null:");
console.log(direccion);

//retorna el tipo de dato
console.log(typeof direccion);
//sale object porque es un error de años 

//Object - estructura de datos con propiedades
let persona = {
    nombre: 'Juan',
    edad: '23',
    ciudad: 'CDMX'
};

console.log("Tipo de dato Object:");
console.log(persona);

//retorna el tipo de dato
console.log(typeof persona);

//Symbol - identificador unico 
let id = Symbol('id');
console.log("Tipo de dato Symbol:");
console.log(id);
console.log(typeof id);