import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  logo: string;
  logoAlt: string;
  
  constructor() { 
  }

  ngOnInit() {
    this.titulo = 'Curso de Angular';
    this.logo = '../../../assets/logo.svg';
    this.logoAlt = 'logotipo de Angular'
  } 

}
