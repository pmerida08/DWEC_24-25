//un mismo manejador con un solo elemento
document.getElementById("eventos").addEventListener("mouseover", manejador);//Evento: mouseover, manejador: manejador
document.getElementById("eventos").addEventListener("mouseout",manejador);

//EL mismo manejador a dos elementos
document.getElementById("parrafo1").addEventListener("click", saludo);
document.getElementById("parrafo2").addEventListener("click", saludo);

function manejador(evento){
    //Comprobamos QUÉ TIPO DE EVENTO ha llamando al manejador
    switch(evento.type){
        case "mouseover":
            this.style.color = "purple";//cuando usamos addEventListener para asignar un evento a un elemento, JS asigna automáticamente el valor de THIS al elemento que llama a la función manejadora
            break;
        case "mouseout":
            this.style.color = "blue";
            break;
    }
}

function saludo(e){
    //Comprobamos QUÉ ELEMENTO ha llamado/disparado al manejador
    if (e.target.id == "parrafo1"){
        alert("Hola desde párrafo 1");
    }else if(e.target.id == "parrafo2"){
        alert("Hola desde párrafo 2");
    }
}