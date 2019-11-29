import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { AlumnusComponent } from './alumnus/alumnus.component';

const routes: Routes = [
  { path: '', component: CursosComponent,
  children: [
      { path: 'inscrip', component: InscripComponent },
      { path: 'alumnos', component: AlumnusComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
