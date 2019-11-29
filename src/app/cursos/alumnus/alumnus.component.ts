import { Component, OnInit } from '@angular/core';
import { AlumnoShortModel } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aub-alumnus',
  templateUrl: './alumnus.component.html',
  styleUrls: ['./alumnus.component.css']
})
export class AlumnusComponent implements OnInit {
  alumnos: Array<AlumnoShortModel>
  fcNombre: FormControl;
  fcCurso: FormControl;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.fcNombre = new FormControl()
    this.fcCurso = new FormControl()
    this.actualizar()
  }

  onAdd() {
    if(!this.fcNombre.value || !this.fcCurso.value) {
      return 
    }
    let alumno = new AlumnoShortModel(
      null, 
      this.fcNombre.value,
      this.fcCurso.value)
    this.alumnosService.create(alumno)
    .subscribe(
      data => {
        console.log(data)
        this.actualizar()
      }
    )
  }

  private actualizar() {
    this.alumnosService.readAll()
    .subscribe( (data) =>  this.alumnos = data)
  }

}
