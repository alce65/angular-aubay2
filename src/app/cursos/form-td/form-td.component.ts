import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'aub-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: [
    '../cursos.component.css',
    './form-td.component.css']
})
export class FormTdComponent implements OnInit {

  turnos: Array<MaestroDatos>
  cursos: Array<MaestroDatos>
  alumno: AlumnoModel;
  @ViewChild('formRef',{static: true} ) formCurso: NgForm;

  constructor() { }

  ngOnInit() {
    this.turnos = TURNOS
    this.cursos = CURSOS
    this.alumno = new AlumnoModel()
    console.log(this.formCurso)
    
  }

  onSubmit() {
    console.log('Enviando', this.alumno)
    // TODO Enviar datos -> this.alumno
  }

  onChange() {
    console.log(this.formCurso)
  }

}
