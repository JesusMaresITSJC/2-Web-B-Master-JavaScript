//seleccionamos nuestros elementos del DOM por id
const Titulo = document.getElementById("Titulo");
console.log(Titulo);

const texto = document.getElementById("texto");
console.log(texto);

const caja = document.getElementById("caja");
console.log(caja);

const btntexto = document.getElementById("btntexto");
const btncolor = document.getElementById("btncolor");
const btnocultar = document.getElementById("btnocultar");
const btnclase = document.getElementById("btnclase");

//crear eventos 
//cambiar texto 
btntexto.addEventListener("click", () =>{
    Titulo.textContent = 'cambiste el texto desde js';
});    

//cambiar color 
btncolor.addEventListener("click", () =>{
    Titulo.style.color = 'purple';
    caja.style.backgroundColor = 'pink';
});  

//ocultar 
btnocultar.addEventListener("click", () =>{
    if(caja.style.display === 'none'){
        caja.style.display = 'block';
    }else{
        caja.style.display = 'none';
    }
});  

//cambiar de clase 
btnclase.addEventListener("click", () =>{
    caja.classList.toggle('activa');
    
});  

//comentarios
const form = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página

    const texto = textarea.value;

    // Crear contenedor del comentario
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");

    // Crear párrafo del texto
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    // Fecha y hora
    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    btnEliminar.addEventListener("click", () => {
        divComentario.remove();
    });

    // Armar comentario
    divComentario.appendChild(pTexto);
    divComentario.appendChild(fecha);
    divComentario.appendChild(btnEliminar);

    // Agregar a la lista
    lista.appendChild(divComentario);

    // Limpiar textarea
    textarea.value = "";
});
