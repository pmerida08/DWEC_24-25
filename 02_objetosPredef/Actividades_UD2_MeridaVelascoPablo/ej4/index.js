document.addEventListener("DOMContentLoaded", function () {
  let num1Element = document.getElementById("num1");
  let num2Element = document.getElementById("num2");
  let resultadoElement = document.getElementById("resultado");

  let aciertos = parseInt(window.localStorage.getItem("aciertos")) || 0;
  let fallos = parseInt(window.localStorage.getItem("fallos")) || 0;

  function jugar() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    if (num1 === num2) {
      location.reload();
    }

    num1Element.textContent = "Número 1: " + num1;
    num2Element.textContent = "Número 2: " + num2;

    let eleccion = prompt("¿Qué número crees que es mayor? (1 o 2)");

    switch (parseInt(eleccion)) {
      case 1:
        if (num1 > num2) {
          alert("¡Has acertado!, " + num1 + " es mayor que " + num2);
          resultadoElement.textContent =
            "¡Has acertado! " + num1 + " es mayor que " + num2;
          aciertos++;
        } else {
          alert("¡Has fallado!, " + num1 + " no es mayor que " + num2);
          resultadoElement.textContent =
            "¡Has fallado! " + num1 + " no es mayor que " + num2;
          fallos++;
        }
        break;
      case 2:
        if (num2 > num1) {
          alert("¡Has acertado!, " + num2 + " es mayor que " + num1);
          resultadoElement.textContent =
            "¡Has acertado! " + num2 + " es mayor que " + num1;
          aciertos++;
        } else {
          alert("¡Has fallado!, " + num2 + " no es mayor que " + num1);
          resultadoElement.textContent =
            "¡Has fallado! " + num2 + " no es mayor que " + num1;
          fallos++;
        }
        break;
      default:
        resultadoElement.textContent = "Esa opción no es válida.";
        return;
    }

    window.localStorage.setItem("aciertos", aciertos);
    window.localStorage.setItem("fallos", fallos);

    resultadoElement.textContent += `\nAciertos: ${aciertos} - Fallos: ${fallos}`;

    let respuesta = prompt("¿Quieres volver a jugar? (S/N)");
    if (respuesta.toUpperCase() === "S") {
      jugar();
    } else {
      alert("¡Hasta la próxima!");
    }
  }

  document.getElementById("jugarBtn").addEventListener("click", jugar);
});
