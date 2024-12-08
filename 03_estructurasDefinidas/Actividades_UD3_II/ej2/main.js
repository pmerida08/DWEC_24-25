/**
 * 2. Verificar si hay algún héroe que esté activo actualmente y opere en Asgard: Usa 
some para determinar si hay un héroe activo en Asgard.
 * 
 */

const heroeActivoEnAsgard = heroes.some(
  (heroe) => heroe.activo && heroe.ciudad === "Asgard"
);

console.log(heroeActivoEnAsgard);
