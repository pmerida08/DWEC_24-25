/**
 * Crea un array bidimensional de 3x2 con los nombres de frutas y sus respectivos 
precios, por ejemplo: [['Manzana', 1], ['Pera', 1.5], ['Uva', 2]]. Después:
 */


const frutas = [['Manzana', 1], ['Pera', 1.5], ['Uva', 2]];

// 1. Usa un bucle for anidado para recorrer y mostrar cada fruta y su precio.

for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < frutas[i].length; j++) {
        console.log(frutas[i][j]);
    }
}

// 2. Añade una nueva fruta con su precio al final del array. 

frutas.push(['Plátano', 1.5]);

// 3. Muestra el array completo en formato de tabla con console.table.

console.table(frutas);