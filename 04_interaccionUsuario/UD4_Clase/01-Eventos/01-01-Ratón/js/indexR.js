"use strict"
/**EVENTOS DE RATÓN
 * - mouseover: meter el cursor dentro del área del objeto, solo se lanza una vez cuando entraen contacto
 * - mouseout: sacar el cursor del área del objeto
 * - click: hacer click sobre el objeto
 * - mousedown: dejar pulsado el ratón sobre el objeto
 * - mouseup: soltar el botón pulsado
 * - mousemove: mover el ratón dentro del objeto, se lanza con cadamovimiento del cursor
 */
let pintar = false;
window.addEventListener("DOMContentLoaded",()=>{
    establecerEvent();
})
const establecerEvent=()=>{
    const arrayInput = document.getElementsByTagName("input");
    //Recorremos todos los inputs de mi formulario
    for (const elemento of arrayInput){
    //Cuando pongamos el cursor sobre el input cambie de color
    elemento.addEventListener("mouseover",function(){
        console.log("He entrado");
        if(this.style.background!="green"){
        this.style.background="blue";
        }
    })
    //Cuando salga el cursor del elemento input vuelva al color original
    elemento.addEventListener("mouseout",function(){
        if(this.style.background!="green"){
            this.style.background="";
        }
        
    })
    //Cuando hacemos click sobre input que ponga otro color
    elemento.addEventListener("click",function(){
        if(this.style.background!="green"){
        this.style.background="green";
        }else{
            this.style.background="";
        }
            
    })

    //Cuando dejamos el ratón pulsado
    elemento.addEventListener("mousedown",function(evento){
        
    //buttons es una propiedad de mouseEvent que devuelve los botones que se han pulsado
        if (evento.buttons==1)// 1 Botón izquierdo
        {
            pintar = true;
        }
    })
    //Cuando dejamos de pulsar
    elemento.addEventListener("mouseup",function(evento){
        pintar = false;
    })
    elemento.addEventListener("mousemove",function(){
        console.log("Me muevo");
        if(pintar){
            this.style.background="red";
        }
    })

    }
}