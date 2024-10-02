document.addEventListener("DOMContentLoaded", function () {

    let ventana;
    document.getElementById("abrir").addEventListener("click", function () {
       ventana = open("", "Ventana", "width=300,height=300");
    });

    document.getElementById("redimensionar").addEventListener("click", function () {
        ventana.resizeTo(600,600);
    });

    document.getElementById("mover").addEventListener("click", function () {
        ventana.moveBy(550,0);
    });

    document.getElementById("cerrar").addEventListener("click", function () {
        ventana.close();
    });
});