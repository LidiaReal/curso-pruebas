import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda en el segmento h3', () => {
      // Este es el nombre que queremos ponerle a la leyenda
      component.leyenda = 'Progreso de carga';
      fixture.detectChanges(); // dispara la detección de cambios

      // con .query buscamos un elemento, con .queryAll buscamos todos los elementos
      // con By.css('h3') buscamos un elemento que esté en un h3, con By.css('.h3') buscamos una clase CSS que tenga un h3
      const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

      expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Debe de mostrar en el input el valor del progreso', () => {
      component.cambiarValor(5);
      fixture.detectChanges();

      // el detectar cambios a veces tarda, por lo tanto hemos de crear esta promesa, que espera a que la fixture
      // haya acabado de detectar los cambios y después realiza las acciones:
      fixture.whenStable().then( () => {
        const input: HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;
        expect(input.value).toBe('55');
      });

    });

    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {
      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

      botones[0].triggerEventHandler('click', null);
      expect(component.progreso).toBe(45);

      botones[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50);

    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {
      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
      botones[0].triggerEventHandler('click', null);
      fixture.detectChanges();

      const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
      expect(elem.innerHTML).toContain('45');

    });

});
