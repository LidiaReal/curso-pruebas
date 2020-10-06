import { usuarioIngresado } from './booleanos';

describe('Pruebas de Booleanos', () => {

  it('Debe de retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
    // .toBeFalsy si devolviera falso la función usuarioIngresado() o .not.toBeTruthy() es lo mismo
  });

});



