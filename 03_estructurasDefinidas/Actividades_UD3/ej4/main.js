/**
 * Dado el array const frutas = ['manzana', 'pera', 'uva', 'mango'];
 */

const frutas = ['manzana', 'pera', 'uva', 'mango'];

// 1. Haz una copia del array usando el método slice.

const copiaFrutas = frutas.slice();

// 2. Haz otra copia utilizando el operador spread.

const copiaFrutasSpread = [...frutas];

// 3. Modifica el array original añadiendo una fruta nueva al final.

frutas.push('fresa');

// 4. Muestra ambos arrays copiados por consola y verifica que no han cambiado.

console.log(frutas);

console.log("Copia de frutas: " +copiaFrutas);

console.log("Copia de frutas Spread" + copiaFrutasSpread);

