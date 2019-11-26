import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleComponent } from './simple/simple.component';
import { PlusComponent } from './plus/plus.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MainComponent, MenuComponent, SimpleComponent, PlusComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
