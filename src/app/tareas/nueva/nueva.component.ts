import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  fcNonbreTarea: FormControl;
  newTarea: TareaModel;
  @Output() addTarea: EventEmitter<TareaModel>
  constructor() { 
    this.addTarea = new EventEmitter()
  }

  ngOnInit() {
    this.fcNonbreTarea = new FormControl()
  }

  onAddTarea(ev) {
    if(!this.fcNonbreTarea.value) {
      return
    }
    this.newTarea = new TareaModel(
      this.fcNonbreTarea.value, false
    )
    this.addTarea.next(this.newTarea)
  }

}
