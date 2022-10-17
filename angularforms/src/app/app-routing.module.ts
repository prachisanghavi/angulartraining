import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrachidirectivesComponent } from './prachidirectives/prachidirectives.component';

const routes: Routes = [
  { path: 'directive', component: PrachidirectivesComponent },
  {
    path: 'show',
    loadChildren: () => import('./nestedform/nested.module').then(m => m.NestedformModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./adding/adding.module').then(m => m.AddingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
