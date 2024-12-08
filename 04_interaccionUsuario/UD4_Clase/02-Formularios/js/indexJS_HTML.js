//VALIDACIÓN DE FORMULARIOS CON JS Y HTML5

window.onload = iniciar; //Sin paréntesis
//var formulario; 
function iniciar(){
    document.getElementById("enviar").addEventListener("click", validar, false);
    //Otra forma de trabajar con el botón submit
    //formulario = document.getElementById("miFormulario");
    //formulario.addEventListener("submit",validar); //Hace lo mismo que la pimera línea, pero de otra forma algo más correcta
}
function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){//Comprobar que la validación de HTML es correcta
        //if(elemento.value == "") No es una buena práctica
        if(elemento.validity.valueMissing){
            errorPersonalizado(elemento,"Debe introducir un nombre");
        }
        if(elemento.validity.patternMismatch){
            errorPersonalizado(elemento,"El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}
function validaEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){//Comprobar que la validación de HTML es correcta
        if(elemento.validity.valueMissing){
            errorPersonalizado(elemento,"Debe introducir una edad");
        }
        if(elemento.validity.rangeOverflow){
            errorPersonalizado(elemento,"Debe introducir una edad menor de 100");
        }
        if(elemento.validity.rangeUnderflow){
            errorPersonalizado(elemento,"Debe introducir una edad mayor de 18");
        }
        //error(elemento);
        return false;
    }
    return true;
}
function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){//Comprobar que la validación de HTML es correcta
        if(elemento.validity.valueMissing){
            errorPersonalizado(elemento,"Debe introducir un teléfono");
        }
        if(elemento.validity.patternMismatch){
            errorPersonalizado(elemento,"El teléfono debe tener 9 cifras");
        }
        return false;
    }
    return true;
}
//Mostrar el mensaje de error que tiene asignado en HTML
function error(elemento){
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage; //Mensaje que tiene por defecto la validación
    //Marco el elemento con color y le asigno el foco
    elemento.className = "error";
    elemento.focus();
}
//Mostrar un mensaje más personalizado que me interese sobre el componente con error
function errorPersonalizado(elemento, mensajeError){
    document.getElementById("mensajeError").innerHTML = mensajeError;
    //Marco el elemento con color y le asigno el foco
    elemento.className = "error";
    elemento.focus();
}
function borrarError(){//En indexJS.js está hecho de otra forma válida también
    var formulario = document.forms[0];//Hay muchas formas de hacer lo mismo
    for (var i = 0 ; i < formulario.elements.length; i++){
        formulario.elements[i].className = "";
    }
}
function validar(e){
    //Limpiamos los errores que han podido ocurrir antes
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();//evito que se lance el evento por defecto del elemento
        return false;
    }
}