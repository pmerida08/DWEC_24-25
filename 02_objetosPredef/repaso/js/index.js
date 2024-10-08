let frase = prompt("Introduce una frase");
frase.trimEnd();

if (frase == "") {
  console.log("No debe estar vacía la cadena");
} else {
  //   let fraseSplit = frase.split(" ");

  //   console.log(fraseSplit);

  //   let ventana = open("", "ventana", "width=300,height=300");

  //   ventana.document.write("Las palabras de la frase son: ");

  //   ventana.document.write("<ul>");
  //   for (let index = 0; index < fraseSplit.length; index++) {
  //     ventana.document.write(`<li>${fraseSplit[index]}</li>`);
  //   }
  //   ventana.document.write("</ul>");

  //   ventana.document.write(`La frase tiene ${fraseSplit.length} palabras.`);

  function imprimir() {
    let wordCounter = 1;
    let inWord = false;

    for (let index = 0; index < frase.length; index++) {
      let letterCode = frase.charCodeAt(index);

      if (
        (letterCode >= 65 && letterCode <= 90) ||
        (letterCode >= 97 && letterCode <= 122)
      ) {
        inWord = true;
      } else if (letterCode == 32) {
        wordCounter++;
        inWord = false;
      }
    }

    let alto = Math.floor(Math.random() * (500 - 400 + 1)) + 400;
    let ancho = Math.floor(Math.random() * (500 - 400 + 1)) + 400;

    let ventana = open("", "ventana", `width=${ancho},height=${alto}`);

    ventana.document.write(`<p>${frase}</p>`);

    ventana.document.write(
      "La frase contiene: " + wordCounter + " palabras.\n"
    );
    ventana.document.write("<p id='contador'></p>");
  }

  let c = 0;
  function empezarContador() {
    let time;

    time = setInterval(contador, 1000);
  }

  // function pararContador(){
  //   clearInterval(time);
  // }

  function contador() {
    c++;
    ventana.document.getElementById("contador").innerHTML = `\nContador: ${c}`;
  }

  function cerrarVentana() {
    ventana.close();
  }

  imprimir();
  empezarContador();
}
