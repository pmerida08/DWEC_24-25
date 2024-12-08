/**
 * Declara un array mixto que contenga 5 elementos de diferentes tipos de datos 
(números, strings, booleanos, etc.). Recorre este array utilizando:
 * 
 */

// 1. Un bucle for clásico.

let arrayMixto = [1, 'dos', true, 4, 'cinco'];

for (let i = 0; i < arrayMixto.length; i++) {
    console.log(arrayMixto[i]);
}

// 2. Un bucle for...in.

for (let i in arrayMixto) {
    console.log(arrayMixto[i]);
}

// 3. Un bucle for...of.

for (let elemento of arrayMixto) {
    console.log(elemento);
}

// 4. Un bucle forEach().

arrayMixto.forEach(elemento => console.log(elemento));
