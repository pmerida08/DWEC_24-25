/**
 * Dado el array const numeros = [10, 20, 30, 40]; realiza lo siguiente:
 */

const numeros = [10, 20, 30, 40];

// 1. Inserta el número 5 al inicio del array

numeros.unshift(5);

// 2. Inserta el número 50 al final del array

numeros.push(50);

// 3. Elimina el primer elemento

numeros.shift();

// 4. Elimina el último elemento

numeros.pop();

// 5. Utiliza splice para eliminar el segundo elemento y añadir en su lugar los números 25 y 35.

numeros.splice(1, 1, 25, 35);

console.log(numeros);
