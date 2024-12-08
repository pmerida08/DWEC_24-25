/** elemento.addEventListener("evento_sin_on"),función,true|false) */
document.getElementById("w3c").addEventListener("click",saludaUnaVez,false);
document.getElementById("w3c").addEventListener("click",colorearse,false);
//document.getElementById("w3c").addEventListener("mouseover",cambiarFondo,false);

function saludaUnaVez() {
    alert("Hola caracola");
    //Ya ha saludado, elimino el evento
    //document.getElementById("w3c").removeEventListener("click",saludaUnaVez);
}
function colorearse() {
    document.getElementById("w3c").style.color = "pink";
  }

function cambiarFondo() {
document.getElementById("w3c").style.background = "blue";
}

//FUNCIONES ANÓNIMAS
document.getElementById("w3cAnonima").addEventListener("click",saludaUnaVez,false);