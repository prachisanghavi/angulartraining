

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedformComponent } from './nestedform.component';



const routes: Routes = [
  {
    path: '',
    component: NestedformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedRoutingModule { }