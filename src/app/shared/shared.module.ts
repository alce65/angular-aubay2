import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { HacerEditableDirective } from './hacer-editable.directive';
import { TruncarPipe } from './truncar.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DestacarDirective, 
    HacerEditableDirective, 
    TruncarPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    DestacarDirective,
    HacerEditableDirective,
    TruncarPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
