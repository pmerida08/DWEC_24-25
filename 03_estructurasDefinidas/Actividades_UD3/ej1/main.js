/**
 * Crea un array de 5 elementos con los nombres de tus provincias favoritas. Después:
 * 
 */

// 1. Añade una provincia nueva al final del array.
let provincias = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga'];

provincias.push('Cádiz');

// 2. Muestra la longitud del array y todos sus elementos usando console.table.

console.log(provincias.length);

console.table(provincias);

// 3. Usa console.log para acceder al tercer elemento del array utilizando at() y la notación de corchetes.

console.log(provincias.at(2));
console.log(provincias[2]);
