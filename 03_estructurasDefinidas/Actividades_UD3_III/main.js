class Alumno {
  constructor(nombre, apellidos, curso, edad) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._curso = curso;
    this._edad = edad;
  }

  // Getters y Setters
  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(value) {
    this._apellidos = value;
  }

  get curso() {
    return this._curso;
  }

  set curso(value) {
    this._curso = value;
  }

  get edad() {
    return this._edad;
  }

  set edad(value) {
    this._edad = value;
  }

  // Método para mostrar los datos del alumno
  toString() {
    return `${this._nombre} ${this._apellidos} - Curso: ${this._curso} - Edad: ${this._edad}`;
  }
}

let alumnos = [];

function pedirDatosAlumno() {
  let nombre = prompt("Introduce el nombre del alumno:");
  if (!nombre) return;

  let apellidos = prompt("Introduce los apellidos del alumno:");
  if (!apellidos) return;

  let curso = prompt("Introduce el curso del alumno:");
  let edad = prompt("Introduce la edad del alumno:");

  if (isNaN(edad)) {
    alert("La edad debe ser un número.");
    return;
  }

  edad = parseInt(edad);

  let alumno = new Alumno(nombre, apellidos, curso, edad);
  alumnos.push(alumno);

  alert("El alumno ha sido creado.");
}

function mostrarAlumnosOrdenados() {
  alumnos.sort((a, b) => a.edad - b.edad);

  let listado = "<h2>Lista de alumnos ordenada por edad:</h2><ul>";
  alumnos.forEach((alumno) => {
    listado += `<li>${alumno.toString()}</li>`;
  });
  listado += "</ul>";

  document.body.innerHTML = listado;
}

function gestionarEntrada() {
  let continuar = true;

  while (continuar) {
    pedirDatosAlumno();
    continuar = confirm("¿Quieres introducir otro alumno?");
  }

  mostrarAlumnosOrdenados();
}

gestionarEntrada();
