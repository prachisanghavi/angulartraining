import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedformComponent } from './nestedform.component';
import { NestedRoutingModule } from './nested-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
   CommonModule,
   NestedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [NestedformComponent]
})
export class NestedformModule { }