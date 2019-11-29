import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AlumnoShortModel } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url: string
  constructor(private http: HttpClient) { 
    this.url = environment.urlUsuarios
  }

  readAll(): Observable<Array<AlumnoShortModel>> {
    console.log(this.url)
    return this.http.get(this.url) as Observable<Array<AlumnoShortModel>>
  }

  read(id: number): Observable<AlumnoShortModel> {
    return this.http.get(this.url+id) as Observable<AlumnoShortModel>
  }

  create(data: AlumnoShortModel): Observable<AlumnoShortModel> {
    return this.http.post(this.url, data) as Observable<AlumnoShortModel>
  }

  update(id: number, data: AlumnoShortModel): Observable<AlumnoShortModel> {
    return this.http.patch(this.url+id, data) as Observable<AlumnoShortModel>
  }
  
  delete(id: number): Observable<Object> {
    return this.http.delete(this.url+id)
  }

}
