export class Jugador {
  puntuacion: number;

  constructor() {
    this.puntuacion = 100;
  }

  recibePerdidas(perdida: number) {
    if(perdida >= this.puntuacion){
      this.puntuacion = 0;
    } else {
      this.puntuacion = this.puntuacion - perdida;
    }

    return this.puntuacion;
  }
}


