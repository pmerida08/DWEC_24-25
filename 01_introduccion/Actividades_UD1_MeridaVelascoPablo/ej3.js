/**
 * @author Pablo Mérida Velasco
 * 
 * Escribe un programa que ponga en práctica la siguiente lógica:
a) Mostrar el siguiente menú y el usuario deberá elegir una de las opciones
b)   En   función   de   la   opción   que   elija   el   usuario   se   le   pedirán   los   datos
necesarios en cada caso.
c) El programa calculará el resultado y lo mostrará en la consola.
d) La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la
opción 4 para salir que mostrará un mensaje por consola, Fin del ejercicio.
e) Si la opción no está entre el rango 1-4 se mostrará un error mediante la
función alert() y se volverá a pedir otra opción
 */

let op1 = 0;

while (true) {
  op1 = parseInt(
    prompt(
      `1 -> Área del triángulo\n2 -> Área del rectángulo\n3 -> Media aritmética de dos números\n4 -> Salir\n`
    )
  );

  if (op1 < 1 || op1 > 4) {
    alert("Error, opción no válida");
  } else if (op1 != 4) {
    switch (op1) {
      case 1:
        let baseTri = parseInt(prompt("Introduce la base del triángulo: ", 5));
        let alturaTri = parseInt(
          prompt("Introduce la altura del triángulo: ", 10)
        );
        console.log(`El área del triángulo es: ${(baseTri * alturaTri) / 2}`);
        break;

      case 2:
        let baseRec = parseInt(
          prompt("Introduce la base del rectángulo: ", 15)
        );
        let alturaRec = parseInt(
          prompt("Introduce la altura del rectángulo: ", 10)
        );
        console.log(`El área del rectángulo es: ${baseRec * alturaRec}`);
        break;

      case 3:
        let num1 = parseInt(prompt("Introduce el primer número: ", 5));
        let num2 = parseInt(prompt("Introduce el segundo número: ", 10));
        console.log(
          `La media aritmética de los dos números es: ${(num1 + num2) / 2}`
        );
        break;
    }
  } else {
    console.log("Fin del ejercicio");
    break;
  }
}
