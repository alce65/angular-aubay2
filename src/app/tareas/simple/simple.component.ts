import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  
  tareas: Array<TareaModel>
  newTarea: TareaModel;
  papelera: IconDefinition;
  storeName: string;

  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;

  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas'
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []

    this.newTarea = new TareaModel()
    this.papelera = faTrashAlt;
  }

  onAddTarea() {
    if (!this.newTarea.nombre) {
      return
    }
    this.tareas.push(this.newTarea)
    this.actualizarStore()
    this.newTarea = new TareaModel()
  }

  onDeleteConfirm() {
    this.confirmar.nativeElement.showModal()
  }

  onDeleteTareas (ev) {
    if (ev) { 
      this.tareas = []
      localStorage.removeItem(this.storeName)
    }
    this.confirmar.nativeElement.close()
  }

  onChange() {
    this.actualizarStore()
  }

  onDelete(i: number) {
    this.tareas.splice(i,1)
    this.actualizarStore()
  }

  onModify(ev: any) {
    ev.target.previousElementSibling.setAttribute('contenteditable', true)
  }

  onEdit(ev: any, i:number) {
    this.tareas[i].nombre = ev.target.textContent
    this.actualizarStore()
  } 

  private actualizarStore() {
    localStorage.setItem(this.storeName,
      JSON.stringify(this.tareas) )
  }

}
