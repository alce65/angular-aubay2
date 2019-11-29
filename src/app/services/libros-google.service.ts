import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibroModel } from '../models/libro.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable(/* {
  providedIn: 'root'
} */)
export class LibrosGoogleService {

  url: string;
  constructor(private http: HttpClient) { 
    this.url = environment.urlLibros
  }

  getPromise(clave: string) : Promise<Array<LibroModel>> {
    return this.http.get(this.url+clave)
    .toPromise().then(
      (res: any) => {
        return res.items.map(
          item => {
            return new LibroModel(
              item.id,
              item.volumeInfo.authors,
              item.volumeInfo.title)}
        )
      }
    ).catch() 
  }

  getRx(clave: string):  Observable<Array<LibroModel>> {
    return this.http.get(this.url+clave)
    .pipe(
      map( (data: any ) => { 
        return data.items.map(
          (item: any) => {
            return new LibroModel(
              item.id,
              item.volumeInfo.authors,
              item.volumeInfo.title)
          }
        ) } )
    )
  }



}
