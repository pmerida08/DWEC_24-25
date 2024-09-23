/**
 * @author Pablo Mérida Velasco
 * 
 * Realiza un script con  if  y otro con  switch  que permita introducir la edad de
una   persona,   mediante   la   función  prompt  y   muestre   un   mensaje   de
pendiendo la edad.
-Si la edad es menor de 18 años, se mostrar el mensaje, "Eres menor
de edad".
-Si la edad es mayor de 18 y menor o igual de 30 de años, se mostrar el
mensaje, "Eres muy joven".
-Si la edad es mayor de 30 y menor o igual de 60 de años, se mostrar el
mensaje, "Eres una persona adulta".
-Si la edad es mayor de 60, se mostrar el mensaje, "Eres una persona
adulta mayor".
-Si la edad es un dato incorrecto, mostrar un mensaje"Error, debe ser
un número"
 */

//Con if

console.log("\nCon if");

let edad1 = parseInt(prompt("IF: Introduce la edad de una persona", "20"));

if (edad1 < 18) {
  console.log("Eres menor de edad");
} else if (edad1 >= 18 && edad1 <= 30) {
  console.log("Eres muy joven");
} else if (edad1 > 30 && edad1 <= 60) {
  console.log("Eres una persona adulta");
} else if (edad1 > 60) {
  console.log("Eres una persona adulta mayor");
} else {
  console.log("Error, debe ser un número");
}

// Con switch

console.log("\nCon switch");

let edad2 = parseInt(prompt("SWITCH: Introduce la edad de una persona", "10"));
switch (true) {
  case edad2 < 18:
    console.log("Eres menor de edad");
    break;
  case edad2 >= 18 && edad2 <= 30:
    console.log("Eres muy joven");
    break;
  case edad2 > 30 && edad2 <= 60:
    console.log("Eres una persona adulta");
    break;
  case edad2 > 60:
    console.log("Eres una persona adulta mayor");
    break;
  default:
    console.log("Error, debe ser un número");
    break;
}
