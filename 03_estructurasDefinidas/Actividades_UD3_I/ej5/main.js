/**
 * Dado el array const colores = ['rojo', 'verde', 'azul', 'amarillo'];: 
 * 
 */

// 1. Usa destructuring para extraer el primer y segundo color en variables llamadas primerColor y segundoColor.

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

const [primerColor, segundoColor] = colores;


// 2. Usa destructuring para extraer el último color en una variable llamada ultimoColor.

const [,,,...ultimoColor] = colores;

// 3. Intercambia los valores de dos variables utilizando destructuring.

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);