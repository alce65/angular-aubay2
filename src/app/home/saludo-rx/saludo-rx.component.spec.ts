import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoRxComponent } from './saludo-rx.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SaludoRxComponent', () => {
  let component: SaludoRxComponent;
  let fixture: ComponentFixture<SaludoRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SaludoRxComponent
       ],
      imports: [
        ReactiveFormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
