import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./prachishow/show.module').then(m => m.ShowModule)

  },
  {
    path: 'add',
    loadChildren: () => import('./prachiadd/adding.module').then(m => m.AddingModule)

  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./prachiedit/edit.module').then(m => m.EditModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
