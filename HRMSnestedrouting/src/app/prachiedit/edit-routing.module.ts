

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrachieditComponent } from './prachiedit.component';



const routes: Routes = [
  {
    path: '',
    component:  PrachieditComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }