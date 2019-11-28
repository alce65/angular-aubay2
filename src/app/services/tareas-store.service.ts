import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';

@Injectable( /* {
  providedIn: 'root'
} */)
export class TareasStoreService {
  storeName: string;
  constructor() {
    this.storeName = 'tareas'
  }

  getTareas(): Array<TareaModel> {
    let r: Array<TareaModel> = JSON.parse(localStorage.getItem(this.storeName))
    if (!Array.isArray(r)) {
      r = []
    }
    return r
  }

  setTareas(datos: Array<TareaModel>): void {
    localStorage.setItem(
      this.storeName,
      JSON.stringify(datos)
    )
  }

  removeTareas() {
    localStorage.removeItem(this.storeName)
  }

  

}
