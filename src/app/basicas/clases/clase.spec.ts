import { Jugador } from './clase';

describe('Pruebas de clase', () => {

  let jugador = new Jugador();

  /*
    CICLOS DE VIDA DE UNA PRUEBA:

    beforeAll(): antes empezar a ejecutar las pruebas
    beforeEach(): antes de ejecutar cada prueba
    afterAll(): después de acabar de ejecutar todas las pruebas
    afterEach(): después de ejecutar cada prueba
  */

  beforeEach( () => {
    jugador = new Jugador();
  });

  it('Debe retornar 80 de puntuación, si recibe 20 de perdidas', () => {
    /* const jugador = new Jugador(); */
    const resp = jugador.recibePerdidas(20);
    expect(resp).toBe(80);
  });


  it('Debe retornar 50 de puntuación, si recibe 50 de perdidas', () => {
    /* const jugador = new Jugador(); */
    const resp = jugador.recibePerdidas(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de puntuación, si recibe 10 de perdidaso más', () => {
    /* const jugador = new Jugador(); */
    const resp = jugador.recibePerdidas(101);
    expect(resp).toBe(0);
  });

});


