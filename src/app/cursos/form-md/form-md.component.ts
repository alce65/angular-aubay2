import { Component, OnInit } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aub-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: [
    '../cursos.component.css',
    './form-md.component.css']
})
export class FormMdComponent implements OnInit {

  turnos: Array<MaestroDatos>
  cursos: Array<MaestroDatos>

  formCurso: FormGroup;
  alumno: AlumnoModel;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.turnos = TURNOS
    this.cursos = CURSOS

    this.formCurso = this.formBuilder.group(
      {
        nombre : ['', [Validators.required]],
        apellidos : ['', []],
        dni : ['', [
          Validators.required, Validators.minLength(9)
        ]],
        passwd : ['', [
          Validators.required, 
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/)
        ]],
        email : ['@sample.com', []],
        coments : ['', []],
        nacim: ['', []],
        isOk: ['', []],
        turno: ['', []],
        curso: ['', []],
      }
    )
     console.log(this.formCurso)
  }

  onSubmit() {
    this.alumno = this.formCurso.value
    // this.alumno = new AlumnoModel()
    console.log('Enviando', this.alumno)
    // TODO Enviar datos -> this.alumno
  }


}
