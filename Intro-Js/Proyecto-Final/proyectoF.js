//comentarios
const form = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");
const msg = document.getElementById("msg");

//claves para el localstorage de los compentarios
const clave_lista = "comentarios_lista";

//funcion cargar comentarios
function cargarComentarios(){
    
    const guardados = JSON.parse(localStorage.getItem(clave_lista)) || [];

    guardados.forEach(c => crearComentario(c));
}

//funcion para crear comentarios 
function crearComentario(datos){

    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");

    const pTexto = document.createElement("p");
    pTexto.textContent = datos.texto;

    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = datos.fecha + " - " + datos.hora;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    btnEliminar.addEventListener("click", () =>{
        divComentario.remove();
        eliminarComentario(datos);
    });

        divComentario.appendChild(pTexto);
        divComentario.appendChild(fecha);
        divComentario.appendChild(btnEliminar);

        lista.appendChild(divComentario);
}

//guardar en localStorage
function guardarComentario(datos){

    const guardados = JSON.parse(localStorage.getItem(clave_lista)) || [];
    
    guardados.push(datos);
    localStorage.setItem(clave_lista, JSON.stringify(guardados));
}

//eliminar con localStorage
function eliminarComentario(datos) {

    let guardados = JSON.parse(localStorage.getItem(clave_lista)) || [];

    guardados = guardados.filter(com =>
        !(com.texto === datos.texto &&
          com.fecha === datos.fecha &&
          com.hora === datos.hora)
    );

    localStorage.setItem(clave_lista, JSON.stringify(guardados));
}

//enviar datos desde formulario
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const texto = textarea.value.trim();

    if (texto === "") {
        msg.textContent = "Escribe un comentario antes de agregar.";
        return;
    }

    msg.textContent = "";

    const ahora = new Date();

    const datos = {
        texto: texto,
        fecha: ahora.toLocaleDateString('es-MX'),
        hora: ahora.toLocaleTimeString('es-MX')
    };

    crearComentario(datos);
    guardarComentario(datos);

    textarea.value = "";
});

cargarComentarios();


