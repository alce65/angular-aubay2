import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'aub-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('refNombre', {static: true}) nodoNombre: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.nodoNombre.nativeElement)
  }

}
