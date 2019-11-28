import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TareasStoreService } from 'src/app/services/tareas-store.service';


@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  
  tareas: Array<TareaModel>
  newTarea: TareaModel;
  papelera: IconDefinition;
  isEditable: boolean;

  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;

  constructor(public storeService: TareasStoreService) { 
  }

  ngOnInit() {
    this.isEditable = false;
    this.tareas = this.storeService.getTareas()

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
      this.storeService.removeTareas()
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
    this.isEditable = true
    console.log(this.isEditable)
    // No sería buena práctica
    // ev.target.previousElementSibling.setAttribute('contenteditable', true)
  }

  onEdit(ev: any, i:number) {
    this.tareas[i].nombre = ev.target.textContent
    this.isEditable = false
    this.actualizarStore()
  } 

  private actualizarStore() {
    this.storeService.setTareas(this.tareas)
  }

}
