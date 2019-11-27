import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'aub-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  mensaje: string;
  constructor() { }

  ngOnInit() {
    this.mensaje = 'Aqui va tu nombre'
  }

  onClickBorrar(ev: Event) {
    console.log(ev)
    this.nombre = ''
  }

}
