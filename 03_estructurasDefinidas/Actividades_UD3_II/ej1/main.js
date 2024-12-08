/**
 * 1. Buscar héroes que operan en Nueva York: Utiliza el método filter para obtener
una lista de héroes que operan en Nueva York. 
 * 
 */

const heroesQueOperanEnNuevaYork = heroes.filter(
  (heroe) => heroe.ciudad === "Nueva York"
);

console.log(heroesQueOperanEnNuevaYork);
