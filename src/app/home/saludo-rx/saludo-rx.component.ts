import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aub-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.css']
})
export class SaludoRxComponent implements OnInit {
  fcNombre: FormControl;
  constructor() { }

  ngOnInit() {
    this.fcNombre = new FormControl()
  }
  onClickBorrar() {
    this.fcNombre.reset()
  }

}
