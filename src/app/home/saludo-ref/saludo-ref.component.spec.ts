import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoRefComponent } from './saludo-ref.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SaludoRefComponent', () => {
  let component: SaludoRefComponent;
  let fixture: ComponentFixture<SaludoRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoRefComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
