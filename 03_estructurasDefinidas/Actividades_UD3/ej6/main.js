/**
 * Dado el array const numeros = [2, 4, 6, 8, 10];: 
 * 
 */

const numeros = [2, 4, 6, 8, 10];

// 1. Usa map para crear un nuevo array con el triple de cada número.

const triples = numeros.map(numero => numero * 3);

// 2. Usa map para crear un array que indique el índice junto al valor, por ejemplo: “0: 2”, “1: 4”, etc.

const indexValue = numeros.map((numero, index) => `${index}: ${numero}`);

// 3. Usa map para añadir el prefijo “Número: “ a cada valor del array.

const prefix = numeros.map(numero => `Número: ${numero}`);
