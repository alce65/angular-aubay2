import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  tareas: Array<TareaModel>
  storeName: string;
  constructor() { }

  ngOnInit() {
    this.storeName = 'tareas'
    this.tareas = JSON.parse(localStorage.getItem(this.storeName)) || []
  }

  onAddTarea(tarea: TareaModel) {
    this.tareas.push(tarea)
    this.actualizarStore()
  } 

  private actualizarStore() {
    localStorage.setItem(this.storeName,
      JSON.stringify(this.tareas) )
  }
}
