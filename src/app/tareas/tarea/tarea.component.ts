import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { EditTareaIf } from 'src/app/models/edit-tarea.interface';

@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Input() i: number;
  @Output() onDelete: EventEmitter<number>
  @Output() onChange: EventEmitter<number>;
  @Output() onEdit: EventEmitter<EditTareaIf>
  papelera: IconDefinition;
  constructor() { 
    this.onDelete = new EventEmitter()
    this.onChange = new EventEmitter()
    this.onEdit = new EventEmitter()
  }

  ngOnInit() {
    this.tarea = {...this.tarea}
    this.papelera = faTrashAlt
  }
  
  onSendChange(){
    this.onChange.next(this.i)
  }

  onSendEdit(ev: any) {
    this.onEdit.next({i: this.i, nombre: ev.target.textContent })
  }
            
  onModify(ev: any) {
    ev.target.previousElementSibling.setAttribute('contenteditable', true)
  }
  
  onSendDelete() {
    this.onDelete.next(this.i)
  }

}
