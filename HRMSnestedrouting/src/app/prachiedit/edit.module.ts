import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrachieditComponent } from './prachiedit.component';


@NgModule({
  imports: [
   CommonModule,
   EditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [PrachieditComponent]
})
export class EditModule { }