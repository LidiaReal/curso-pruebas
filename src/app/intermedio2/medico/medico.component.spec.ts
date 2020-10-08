import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {

    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent
      ],
      // si utilizara servicios
      providers: [
        MedicoService,
      ],
      // si utilizara otros módulos
      imports:[
        HttpClientModule
      ]
    });

    // con esto podemos tener acceso a todos los métodos del componente,
    // con la fixture también podemos acceder a su HTML.
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;

  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Lidia';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });

});




