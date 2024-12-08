export class Partido {
  constructor(jugadores, sets) {
    this.jugadores = jugadores;
    this.sets = sets;
  }

  getJugadores() {
    return this.jugadores;
  }

  getSets() {
    return this.sets;
  }

  setJugadores(jugadores) {
    try {
      if (jugadores instanceof Array) {
        throw "Debe ser una lista de dos jugadores";
      } else if (jugadores.length != 2) {
        throw "Debe ser una lista de dos jugadores";
      } else if (jugadores[0] == jugadores[1]) {
        throw "Los jugadores no pueden ser iguales";
      }
      this.jugadores = jugadores;
    } catch (error) {
      console.error(error);
    }
  }

  setSets(sets) {
    try {
      if (sets.match(/^[0-9]{1,2}-[0-9]{1,2}$/) == null) {
        throw "El formato de los sets es incorrecto";
      } else if (sets.split("-")[0] > 6 || sets.split("-")[1] > 6) {
        throw "El set no puede tener más de 6 juegos";
      }
      this.sets = sets;
    } catch (error) {
      console.error(error);
    }
  }

  toString() {
    const jugadoresSplit = this.jugadores.split(",");
    return "Jugadores: " + jugadoresSplit + " Sets: " + this.sets;
  }
}
