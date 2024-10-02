document.addEventListener("DOMContentLoaded", function () {

  let pass = prompt("Introduce una contraseña");

  let letrasMinusculas = 0;
  let letrasMayusculas = 0;
  let numeros = 0;
  let caracteresEspeciales = 0;
  let longitud = pass.length;
  let passFuerte = false;

  for (let i = 0; i < longitud; i++) {
    let caracter = pass.charAt(i);
    if (caracter >= "a" && caracter <= "z") {
      letrasMinusculas++;
    } else if (caracter >= "A" && caracter <= "Z") {
      letrasMayusculas++;
    } else if (caracter >= "0" && caracter <= "9") {
      numeros++;
    } else {
      caracteresEspeciales++;
    }
  }

  if (
    longitud >= 8 &&
    longitud <= 16 &&
    letrasMinusculas >= 1 &&
    letrasMayusculas >= 2 &&
    numeros >= 1 &&
    caracteresEspeciales >= 2
  ) {
    passFuerte = true;
  }

  if (passFuerte) {
    document.write("La contraseña es fuerte");
  } else {
    document.write("La contraseña es débil");
  }
});
