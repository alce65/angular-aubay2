import { Component, OnInit, Input } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  papelera: IconDefinition;
  constructor() { }

  ngOnInit() {
    // this.tarea = new TareaModel('prueba')
    this.papelera = faTrashAlt
  }
  
  onChange(){}

  onEdit(ev, i) {}
            
  onModify(ev) {}
  
  onDelete(i) {}

}
