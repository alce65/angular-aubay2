import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'aub-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>
  url: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.libros = []
    this.url = environment.urlLibros
  }

  onBuscar() {
    if(!this.fcClave.value) {
      return
    }
    this.http.get(this.url + this.fcClave.value)
    .toPromise().then(
      (resp: any)=> {
        this.libros = resp.items.map( (item: any)  => {
          return new LibroModel(item.id, item.volumeInfo.authors, item.volumeInfo.title )
        })
      }
    )
  }

}