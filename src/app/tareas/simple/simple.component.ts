import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  
  tareas: Array<TareaModel>
  newTarea: TareaModel;

  constructor() { }

  ngOnInit() {
    this.tareas = []
    this.newTarea = new TareaModel()
  }

  onAddTarea() {
    if (!this.newTarea.nombre) {
      return
    }
    this.tareas.push(this.newTarea)
    this.newTarea = new TareaModel()
    console.log(this.tareas)
  }

}
