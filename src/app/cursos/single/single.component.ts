import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AlumnoShortModel } from 'src/app/models/alumno.model';

@Component({
  selector: 'aub-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  fcNombre: FormControl;
  fcCurso: FormControl;
  userId: number;
  alumno: AlumnoShortModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alumnosService: AlumnosService
  ) { }

  ngOnInit() {
    this.fcNombre = new FormControl()
    this.fcCurso = new FormControl()
    this.userId = this.activatedRoute.snapshot.params.id
    this.alumnosService.read(this.userId)
      .subscribe( data => {
        this.fcNombre.setValue(data.nombre)
        this.fcCurso.setValue(data.curso)
      })
  }

  onModify() {
    this.alumno = new AlumnoShortModel(
      this.userId,  
      this.fcNombre.value,
      this.fcCurso.value
    )
    this.alumnosService.update(this.userId,this.alumno)
    .subscribe(
      () => {
        this.router.navigateByUrl('cursos/alumnos')
      }
    )
  }

  onDelete (){
    this.alumnosService.delete(this.userId)
      .subscribe(
        () => {
          this.router.navigateByUrl('cursos/alumnos')
        }
      )
  }

}
