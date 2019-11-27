import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MenuComponent } from 'src/app/tareas/menu/menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        MenuComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as titulo 'Curso de Angular'`, () => {
    expect(component.titulo).toEqual('Curso de Angular');
  });

  it('should render title', () => {   
    const rendered = fixture.debugElement.nativeElement;
    // fixture.detectChanges();
    expect(rendered.querySelector('h1').textContent).toContain('Angular');
  });
});
