import { empty, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    // ponemos un null, porque MedicosService espera una inyección del http, pero como vamos a hacer pruebas,
    // no vamos a usar el http.
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        // con es spyOn decimos que espie el método getMedicos del servicio y que haga una llamada falsa
        // y que devuelva un observable from de médicos.
        spyOn(servicio, 'getMedicos').and.callFake( () => {
            return from( [medicos] ); // retorna un observable, from es un observable por si mismo
        });

       componente.ngOnInit();

       expect(componente.medicos.length).toBeGreaterThan(0);

    });

    it('Init: Debe de llamar al servidor para agregar un médico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return empty();
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();

    });

    it('Init: Debe de agregar un médico al arreglo de médicos', () => {

       const medico = {id: 1, nombre: 'Lidia'};

       spyOn(servicio, 'agregarMedico').and.returnValue( from( [medico] ) );

       componente.agregarMedico();

       // expect(componente.medicos.length).toBe(1);
       expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });

    it('Si falla la adición, la propiedad mensajeError, ha de ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);

    });

    it('Debe de llamar al servidor para borrar un médico', () => {

      // este espía dará el OK en la ventana de confirmar:
      spyOn(window, 'confirm').and.returnValue(true);

      const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
          empty()
      );

      componente.borrarMedico('1');

      expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe de llamar al servidor para borrar un médico', () => {

      // este espía dará el OK en la ventana de confirmar:
      spyOn(window, 'confirm').and.returnValue(false);

      const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
          empty()
      );

      componente.borrarMedico('1');

      expect(espia).not.toHaveBeenCalledWith('1');

    });

});



