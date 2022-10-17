import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrachiaddComponent } from './prachiadd.component';




const routes: Routes = [
  {
    path: '',
    component: PrachiaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddingRoutingModule { }
