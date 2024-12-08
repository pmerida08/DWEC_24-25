/**
 * 3. Obtener  el  héroe  con  mayor  nivel  de  poder:  Aplica  el  método  reduce  para 
encontrar al héroe con el mayor nivel de poder.
 * 
 */

const heroeConMayorPoder = heroes.reduce((heroeConMasPoder, heroe) => {
  if (heroe.poder > heroeConMasPoder.poder) {
    return heroe;
  } else {
    return heroeConMasPoder;
  }
});

console.log(heroeConMayorPoder);

let a = [];
a.reduce
