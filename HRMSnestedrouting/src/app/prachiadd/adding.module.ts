import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrachiaddComponent } from './prachiadd.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddingRoutingModule } from './adding-routing.module';


@NgModule({
  imports: [
   CommonModule,
  
    AddingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [PrachiaddComponent]
})
export class AddingModule { }