//1 seleccionar productos a ocupar

let iteminput = document.getElementById("iteminput");
let addIteamBtn = document.getElementById("addIteamBtn");
let iteamList = document.getElementById("iteamList");

//2. crear funcion para mandar el valor de lo que escribimos dentro del item 
function addItemBtnClick() {
    let itemText = iteminput.value;
    let newItem = document.createElement('li');

    //crear un spam para evitar inyecciones JS
    let textspan = document.createElement('span');
    textspan.textContent = itemText;
    newItem.appendChild(textspan);

    //boton eliminar 
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';

    deleteButton.addEventListener('click', function(){
        newItem.remove();
    });

    //donde colocar los datos
    newItem.appendChild(deleteButton);
    iteamList.appendChild(newItem);
    iteminput.value = '';

};

//3. utilizar la funcion
addIteamBtn.addEventListener('click', addItemBtnClick);


/* ejercicio de clase */

//botones e input
let Tareainput = document.getElementById("Tareainput");
let addTareaBtn = document.getElementById("addTareaBtn");
let select_tareas = document.getElementById("select_tareas");
//listas
let listaUrgente = document.getElementById("LUrgente");
let listaImportante = document.getElementById("LImportante");
let listaParaDespues = document.getElementById("LPara_Despues");
let listaSiguienteSemana = document.getElementById("LSiguiente_Semana");
    
function addtareaBtnClick() {
    let tareatxt = Tareainput.value;
    let opcion = select_tareas.value;

    let newTarea = document.createElement('li');
    let textspan = document.createElement('span');
    textspan.textContent = tareatxt;
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
        newTarea.remove();
    };

    newTarea.appendChild(textspan);
    newTarea.appendChild(deleteButton);

    if (opcion === "1") {
        listaUrgente.appendChild(newTarea);
    } 
    else if (opcion === "2") {
        listaImportante.appendChild(newTarea);
    } 
    else if (opcion === "3") {
        listaParaDespues.appendChild(newTarea);
    } 
    else if (opcion === "4") {
        listaSiguienteSemana.appendChild(newTarea);
    }

    Tareainput.value = '';
}

addTareaBtn.addEventListener('click', addtareaBtnClick);