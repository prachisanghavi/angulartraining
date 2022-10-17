import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrachishowComponent } from './prachishow.component';
import { ShowRoutingModule } from './show-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
   CommonModule,
    ShowRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [PrachishowComponent]
})
export class ShowModule { }