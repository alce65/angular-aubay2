import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../shared/shared.module';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';


@NgModule({
  declarations: [CursosComponent, FormTdComponent, FormMdComponent],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
