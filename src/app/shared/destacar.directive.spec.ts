import { DestacarDirective } from './destacar.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: '<div id="test"></div>'
})
class TestComponent {}

/* describe('DestacarDirective', () => {
  let element: ElementRef;
  let fixture: ComponentFixture<Component>;
  let component: Component;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('#test'));
  })

  it('should create an instance', () => {
    const directive = new DestacarDirective(element);
    expect(directive).toBeTruthy();
  });
}); */
