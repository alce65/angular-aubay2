import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockComponent } from './mock/mock.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleComponent } from './google/google.component';
import { LibrosMockService } from '../services/libros-mock.service';

@NgModule({
  declarations: [LibrosComponent, MockComponent, GoogleComponent],
  imports: [
    CommonModule,
    SharedModule,
    LibrosRoutingModule
  ],
  providers: [LibrosMockService]
})
export class LibrosModule { }
