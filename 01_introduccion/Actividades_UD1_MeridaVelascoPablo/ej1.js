/**
 * @author Pablo Mérida Velasco
 * 
 * Números: Crea un script que muestre los números impares que no sean múltiplo de 
3 ni de 7 que se encuentren entre el 100 al 1. Realizar versiones del programa 
usando bucles while, do while y for.
 * 
 */

// Con while
console.log("Con while");

let c1 = 0;
while (c1 < 101) {
  if (c1 % 3 != 0 && c1 % 7 != 0 && c1 % 2 != 0) {
    console.log(`El número ${c1} no es múltiplo de 3 ni de 7.`);
  }
  c1++;
}

// Con do-while
console.log("\nCon do-while");

let c2 = 0;

do {
  if (c2 % 3 != 0 && c2 % 7 != 0 && c2 % 2 != 0) {
    console.log(`El número ${c2} no es múltiplo de 3 ni de 7.`);
  }
  c2++;
} while (c2 < 101);

// Con for
console.log("\nCon for");

for (let c3 = 0; c3 < 101; c3++) {
  if (c3 % 3 != 0 && c3 % 7 != 0 && c3 % 2 != 0) {
    console.log(`El número ${c3} no es múltiplo de 3 ni de 7.`);
  }
}
