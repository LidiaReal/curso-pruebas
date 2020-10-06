import { Jugador2 } from './jugador2';


describe('Jugador 2 Emit', () => {

  let jugador: Jugador2;
  beforeEach( () => jugador = new Jugador2() );

  it('Debe emitir un evento cuando pierde puntuación', () => {

    let nuevaPuntuacion = 0;

    jugador.puntuacionCambia.subscribe( puntuacion => {
      nuevaPuntuacion = puntuacion;
    });

    jugador.recibePerdidas(1000);

    expect(nuevaPuntuacion).toBe(0);

  });

  it('Debe emitir un evento cuando pierde puntuación y sobrevivir si es menos de 100', () => {

    let nuevaPuntuacion = 0;

    jugador.puntuacionCambia.subscribe( puntuacion => {
      nuevaPuntuacion = puntuacion;
    });

    jugador.recibePerdidas(50);

    expect(nuevaPuntuacion).toBe(50);

  });

});



