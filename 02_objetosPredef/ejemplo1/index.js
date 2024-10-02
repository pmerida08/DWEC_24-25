function saludar() {
  alert("Hola");
}

function lanzarSaludo() {
  setTimeout(saludar, 2000);
}

let ventana = open("", "ventana", "width=300,height=300");
ventana.document.body.bgColor = "lightgreen";
let intervalo;

function empezarColor(){
    ventana.focus();
    intervalo = setInterval(color, 2000);
}
function color() {
  if(ventana.document.body.bgColor == "lightgreen"){
    ventana.document.body.bgColor = "lightblue";
  } else {
    ventana.document.body.bgColor = "lightgreen";
  }
}
