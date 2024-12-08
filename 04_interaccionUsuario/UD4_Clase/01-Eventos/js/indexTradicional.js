document.getElementById("tradicional1").onclick = cambiar; //sin parentisis!!!
function cambiar() {
    alert("Estamos dentro de cambiar");
    document.getElementById("tradicional1").innerHTML = "Modelo de eventos tradicional 1";
  }

  //windows.onload Tiene que estar la página completamente cargada para ejecutar el contenido
  window.onload = function (){
    alert("La página se ha cargado correctamente");
    document.getElementById("tradicional2").onclick = cambiar2; //sin parentisis!!!
    
  }
  function cambiar2(){
    document.getElementById("tradicional2").innerHTML = "Modelo de eventos tradicional 2";
  }