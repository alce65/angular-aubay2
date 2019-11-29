import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LIBROS } from 'src/app/models/libros.data';
import { LibrosMockService } from 'src/app/services/libros-mock.service';

@Component({
  selector: 'aub-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>
  
  constructor(private mockService: LibrosMockService) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.libros = []
  }

  onBuscar() {
    if(!this.fcClave.value) {
      return
    }
    console.log('Bucando', this.fcClave.value)
    this.libros = LIBROS
  }

  onBuscarAsinc() {
    if(!this.fcClave.value) {
      return
    }
    console.log('Bucando asincronicamente', this.fcClave.value)
    this.mockService.getLibrosAsinc(this.fcClave.value)
      .then( (resp: Array<LibroModel>) => {
        this.libros = resp
      })
  }

  onDelete() {
    this.libros = []
  }
}
