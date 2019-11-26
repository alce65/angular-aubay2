import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SimpleComponent } from './simple/simple.component';
import { PlusComponent } from './plus/plus.component';


const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    children: [
      { path: 'simple', component: SimpleComponent },
      { path: 'plus', component: PlusComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
