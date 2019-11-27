import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[aubDestacar]'
})
export class DestacarDirective implements OnInit {

  @Input() aubDestacar: string;
  constructor(private element: ElementRef) { 
    console.log('Destacando')
    console.dir(this.element)
  }

  ngOnInit() {
    console.dir(this.aubDestacar)
    this.element.nativeElement.innerHTML += 
    `<div class="destacar color-destacar">${this.aubDestacar}</div>`


  }

  @HostListener('click')  cambiarColor() {
    this.element.nativeElement.children[0]
    .classList.toggle('color-destacar')
  }
}
