//VALIDACIÓN DE FORMULARIO SOLO CON JS


//Seleccionar elementos de un formulario
//.elements[] Devuelve un arrya con todo los input del formulario
//getElementById("idElemento") devuelve el elemento con ese id
//getElementsByTagName("etiqueta") devuelve un array con los elementos de ese tipo de etiqueta (input, select, etc...)
//getElementsByName("nombre") devuelve un array con los elementos con el mismo nombre (radibutton)
var formulario1 , formulario2, formulario3; 

window.onload = iniciar; //Sin paréntesis!!!

function iniciar(){

//Seleccionar el formulario de distintas formas
//1- Conociendo el id
formulario1 = document.getElementById("miFormulario");

//2- Conociendo el número de formularios que hay en la página
formulario2 = document.getElementsByTagName("form")[0];
formulario3 = document.forms[0];

    //Asociar a los botones eventos
    document.getElementById("enviar").addEventListener('click',validar,false);//Sin paréntesis!!!!!
    document.getElementById("borrar").addEventListener('click',limpiarFormulario,false);//Sin paréntesis!!!!!
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if(elemento.value == ""){
        alert("El campo nombre no puede estar vacío");
        //Marcamos como error este elemento (input)
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if(isNaN(elemento.value)){
        alert("El campo teléfono tiene que ser numérico");
        //Marcamos como error este elemento (input)
        error(elemento);
        return false;
    }
    return true;
}
function validaFecha() {
    var elemento= document.getElementById("dia");
    limpiarError(elemento);
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anno = document.getElementById("anno").value;

    
    var fecha = new Date(anno, mes - 1, dia);

    if(isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        error(elemento);
        return false;
    }
    return true;
}
function validaEdad() {
    var elemento = document.getElementById("mayor");
    if(!elemento.checked){
        alert("Debes ser mayor de edad para continuar");
        return false;
    }
    return true;
}
function validar(e) {
    if (validaNombre() && validaFecha() && validaTelefono() && validaEdad() && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();//Evitamos que se envíe el formulario. Evitas el evento asociado por defecto al elemento.
        return false;
    }
}
function limpiarFormulario(){
    //var arrayInput = document.getElementsByTagName("input"); Hacen lo mismo porque solo hay UN formulario en página
    var arrayInput = formulario1.getElementsByTagName("input");
    for (const elemento of arrayInput){
        limpiarError(elemento);
    }
}

function error(elemento){
    elemento.className = "error";
    elemento.focus();
}
function limpiarError(elemento){
    elemento.className = "";
}
 //LA función cvalidar fecha algo más completa
/* function validaFecha() {
    // Obtener los valores del formulario
    var dia = parseInt(document.getElementById("dia").value, 10);
    var mes = parseInt(document.getElementById("mes").value, 10);
    var ano = parseInt(document.getElementById("ano").value, 10);

    // Validar rango del año, mes y día
    if (isNaN(dia) || dia < 1 || dia > 31) {
        alert("El día debe estar entre 1 y 31");
        return false;
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        alert("El mes debe estar entre 1 y 12");
        return false;
    }
    if (isNaN(ano) || ano < 1900 || ano > 2100) {
        alert("El año debe estar entre 1900 y 2100");
        return false;
    }

    // Crear la fecha ajustando el índice del mes
    var fecha = new Date(ano, mes - 1, dia);

    // Verificar si la fecha es válida
    if (fecha.getFullYear() !== ano || fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
        alert("La fecha no es válida (día/mes incorrectos)");
        return false;
    }

    return true;
} */