

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrachishowComponent } from './prachishow.component';



const routes: Routes = [
  {
    path: '',
    component: PrachishowComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }

