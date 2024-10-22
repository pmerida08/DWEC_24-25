function mayorEdad() {
  let fechaNac = new Date(
    prompt("Introduce tu fecha de nacimiento (dd/mm/yyyy): ")
  );

  if (fechaNac == "") {
    alert("No quieres compartir tu edad");
  }

  fechaNac = new Date(fechaNac).toLocaleDateString();
  const hoy = new Date().toLocaleString();

  const hoySplitted = hoy.split("/");
  const fechaNacSplitted = fechaNac.split("/");

  // Cogemos el día, mes, año de cada fecha
  const todayYear = hoySplitted.at(2).split(",").at(0);
  const todayMonth = hoySplitted.at(1);
  const todayDay = hoySplitted.at(0);

  const fechaNacYear = fechaNacSplitted.at(2);
  const fechaNacMonth = fechaNacSplitted.at(0);
  const fechaNacDay = fechaNacSplitted.at(1);

  let edad = todayYear - fechaNacYear;

  if (todayMonth > fechaNacMonth) {
    edad--;
  } else if (todayMonth == fechaNacMonth) {
    if (todayDay > fechaNacDay) {
      edad--;
    }
  }

  if (edad >= 16) {
    alert("Tienes más de 16 años, puedes ver la serie");
  } else {
    alert("Tienes menos de 16 años, no puedes ver la serie");
  }
}

function cerrar() {
  if (ventana) {
    ventana.close();
  } else {
    alert("No hay ninguna ventana abierta");
  }
}

let time;

function cambiarColor(c1, c2) {
  if (ventana.document.body.style.backgroundColor == c1) {
    ventana.document.body.style.backgroundColor = c2;
  } else {
    ventana.document.body.style.backgroundColor = c1;
  }
}
// function empezarColor(color1, color2) {
//   time = setInterval(cambiarColor(color1, color2), 500);
// }

function casa1() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa Targaryen", `width=${ancho}, height=${alto}`);

  let color1 = "red";
  let color2 = "black";

  ventana.document.body.style.backgroundColor = color1;

  // Colores del background
  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}

function casa2() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa Velaryon", `width=${ancho}, height=${alto}`);

  let color1 = "silver";
  let color2 = "navy";

  ventana.document.body.style.backgroundColor = color1;

  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}

function casa3() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa HighTower", `width=${ancho}, height=${alto}`);

  let color1 = "white";
  let color2 = "green";

  ventana.document.body.style.backgroundColor = color1;

  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}

function casa4() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa Strong", `width=${ancho}, height=${alto}`);

  let color1 = "blue";
  let color2 = "brown";

  ventana.document.body.style.backgroundColor = color1;

  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}

function casa5() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa Lannister", `width=${ancho}, height=${alto}`);

  let color1 = "red";
  let color2 = "gold";

  ventana.document.body.style.backgroundColor = color1;

  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}

function casa6() {
  let alto = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
  let ancho = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

  let ventana;
  ventana = open("", "Casa Baratheon", `width=${ancho}, height=${alto}`);

  let color1 = "black";
  let color2 = "gold";

  ventana.document.body.style.backgroundColor = color1;

  time = setInterval(function () {
    if (ventana.document.body.style.backgroundColor == color1) {
      ventana.document.body.style.backgroundColor = color2;
    } else {
      ventana.document.body.style.backgroundColor = color1;
    }
  }, 500);
}
