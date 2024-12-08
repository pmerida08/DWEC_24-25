"use strict"
/**EVENTOS DE TECLADO
 * - keydown: se lanza cuando se pulsa cualquier tecla, independientemente de que produzca caracter o no 
 * - keyup: se lanza cuando se suelta una tecla, es el opuesto a keydown
 * - input: se lanza cuando se produce un cambio en el contenido del objeto (no todas las teclas producen cambio)
 */

//Garantizo que todos os elementos del DOM se han cargado
window.addEventListener("DOMContentLoaded",()=>{
    establecerEvent();
})
const establecerEvent=()=>{
    const arrayInput = document.getElementsByTagName("input");
    //Recorremos todos los inputs de mi formulario
    for (const elemento of arrayInput){
        //Evento keydown,al pulsar una tecla
        elemento.addEventListener("keydown",function(event){
            //Todo el contenido del evento
            console.log("Pulsando...");
            
        })

        //Evento keyup,al soltar una tecla
        elemento.addEventListener("keyup",function(event){
            //Todo el contenido del evento
            console.log("Suelto");
            
        })

        //Evento input,modifica el contenido del elemento
        elemento.addEventListener("input",function(event){
            //Todo el contenido del evento
            console.log("Modifico");
            
        })
        
    }
}