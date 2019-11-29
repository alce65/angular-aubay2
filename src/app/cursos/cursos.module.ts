import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../shared/shared.module';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { AlumnusComponent } from './alumnus/alumnus.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [CursosComponent, FormTdComponent, FormMdComponent, InscripComponent, AlumnusComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
