import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingComponent } from './adding.component';

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
  declarations: [AddingComponent]
})
export class AddingModule { }