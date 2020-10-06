import { EventEmitter } from '@angular/core';


export class Jugador2 {
  puntuacion: number;
  puntuacionCambia = new EventEmitter<number>();

  constructor() {
    this.puntuacion = 100;
  }

  recibePerdidas(perdida: number) {
    if(perdida >= this.puntuacion){
      this.puntuacion = 0;
    } else {
      this.puntuacion = this.puntuacion - perdida;
    }

    this.puntuacionCambia.emit(this.puntuacion);

  }
}


