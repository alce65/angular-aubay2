import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusComponent } from './plus.component';
import { NuevaComponent } from '../nueva/nueva.component';
import { TareaComponent } from '../tarea/tarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('PlusComponent', () => {
  let component: PlusComponent;
  let fixture: ComponentFixture<PlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PlusComponent,
        NuevaComponent,
        TareaComponent
       ],
       imports: [
         FormsModule,
         ReactiveFormsModule,
         FontAwesomeModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
