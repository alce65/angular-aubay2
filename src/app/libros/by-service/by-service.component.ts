import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/models/libro.model';
import { FormControl } from '@angular/forms';
import { LibrosGoogleService } from 'src/app/services/libros-google.service';

@Component({
  selector: 'aub-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.css']
})
export class ByServiceComponent implements OnInit {

  fcClave: FormControl;
  libros: Array<LibroModel>

  constructor(private lgService: LibrosGoogleService) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.libros = []
  }

  onBuscar() {
    if(!this.fcClave.value) {
      return
    }
    this.lgService.getPromise(this.fcClave.value)
    .then( res => this.libros = res)
    this.fcClave.reset()
  }

  async onBuscarAsinc() {
    if(!this.fcClave.value) {
      return
    }
    this.libros = await this.lgService.getPromise(this.fcClave.value)
    this.fcClave.reset()
  }

  onBuscarRx() {
    if(!this.fcClave.value) {
      return
    }
    this.lgService.getRx(this.fcClave.value)
    .subscribe( res => this.libros = res)
    this.fcClave.reset()
  }
}
