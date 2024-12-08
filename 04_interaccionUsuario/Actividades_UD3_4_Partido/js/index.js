import { Partido } from "./Partido.js";
import { Jugador } from "./Jugador.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enviar").addEventListener("click", validar, false);
});

// function error(elemento) {
//   document.getElementById("mensajeError").innerHTML =
//     elemento.validationMessage; //Mensaje que tiene por defecto la validación
//   //Marco el elemento con color y le asigno el foco
//   elemento.className = "error";
//   elemento.focus();
// }

function errorPersonalizado(elemento, mensajeError) {
  document.getElementById("mensajeError").innerHTML = mensajeError;
  //Marco el elemento con color y le asigno el foco
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  //En indexJS.js está hecho de otra forma válida también
  var formulario = document.forms[0]; //Hay muchas formas de hacer lo mismo
  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}

function validarJugadores() {
  const nombreJ1 = document.getElementById("nombreJugador1");
  const edadJ1 = document.getElementById("edadJugador1");
  const nombreJ2 = document.getElementById("nombreJugador2");
  const edadJ2 = document.getElementById("edadJugador2");

  if (
    validarNombre(nombreJ1) &&
    validarNombre(nombreJ2) &&
    validarEdad(edadJ1) &&
    validarEdad(edadJ2)
  ) {
    const j1 = new Jugador(nombreJ1.value, edadJ1.value);
    const j2 = new Jugador(nombreJ2.value, edadJ2.value);

    return [j1, j2];
  } else {
    return false;
  }
}

function validarSets() {
  const set1 = document.getElementById("set1");
  const set2 = document.getElementById("set2");
  const set3 = document.getElementById("set3");

  if (validarSet(set1) && validarSet(set2) && validarSet(set3)) {
    return [set1.value, set2.value, set3.value];
  } else {
    return false;
  }
}

function validarSet(set) {
  if (!set.checkValidity()) {
    if (set.validity.valueMissing) {
      errorPersonalizado(set, "El set no puede estar vacío");
    }
    if (set.validity.patternMismatch) {
      errorPersonalizado(set, "El set no tiene el formato correcto (4-6)");
    }
    return false;
  }
  return true;
}

function validarNombre(nombre) {
  if (!nombre.checkValidity()) {
    if (nombre.validity.valueMissing) {
      errorPersonalizado(nombre, "El nombre no puede ir vacío");
    }
    if (nombre.validity.patternMismatch) {
      errorPersonalizado(
        nombre,
        "El nombre debe contener entre 3 y 50 caracteres"
      );
    }
    return false;
  }
  return true;
}

function validarEdad(edad) {
  if (!edad.checkValidity()) {
    if (edad.validity.valueMissing) {
      errorPersonalizado(edad, "La edad no puede estar vacía");
    }
    if (edad.validity.rangeOverflow) {
      errorPersonalizado(edad, "La edad no puede ser mayor de 60");
    }
    if (edad.validity.rangeUnderflow) {
      errorPersonalizado(edad, "La edad no puede ser menor de 10");
    }
    return false;
  }
  return true;
}

function validar(e) {
  e.preventDefault();
  borrarError();

  const jugadores = validarJugadores();
  const sets = validarSets();

  if (
    jugadores &&
    sets &&
    confirm("Pulsa aceptar si deseas enviar el formulario: ")
  ) {
    const partido = new Partido(jugadores, sets);
    console.log(partido);
    return new Partido(jugadores, sets);
  } else {
    e.preventDefault();
    return false;
  }
}
