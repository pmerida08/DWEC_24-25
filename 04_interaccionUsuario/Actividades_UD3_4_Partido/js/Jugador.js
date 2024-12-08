export class Jugador {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  setNombre(nombre) {
    try {
      if (nombre.length < 2 || nombre.length > 50) {
        throw "El nombre debe tener entre 2 y 50 caracteres";
      } else if (!isNaN(nombre)) {
        throw "El nombre no puede ser un número";
      } else if (nombre == "") {
        throw "Debe introducir un nombre";
      }
      this.nombre = nombre;
    } catch (error) {
      console.error(error.message);
    }
  }

  setEdad(edad) {
    try {
      if (isNaN(edad)) {
        throw "La edad debe ser un número";
      } else if (edad < 10) {
        throw "La edad debe ser mayor de 10";
      } else if (edad > 60) {
        throw "La edad debe ser menor de 60";
      }
      this.edad = edad;
    } catch (error) {
      console.error(error.message);
    }
  }

  toString() {
    return this.nombre + " (" + this.edad + " años)";
  }
}
