import { Injectable } from '@angular/core';
import { LibrosModule } from '../libros/libros.module';
import { LIBROS } from '../models/libros.data';
import { LibroModel } from '../models/libro.model';

@Injectable(/* {
  providedIn: LibrosModule
} */)
export class LibrosMockService {

  constructor() { }

  getLibros(clave: string) {
    return LIBROS
  }

  getLibrosAsinc(clave: string) : Promise<Array<LibroModel>> {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(LIBROS)
      }, 3000)
    }) 
    // return Promise.resolve(LIBROS)
  }



}
