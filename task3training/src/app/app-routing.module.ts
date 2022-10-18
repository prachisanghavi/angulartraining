import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrachiforgotPasswordComponent } from './components/prachiforgot-password/prachiforgot-password.component';
import { PrachiloginComponent } from './components/prachilogin/prachilogin.component';
import { PrachinotFoundComponent } from './components/prachinot-found/prachinot-found.component';

const routes: Routes = [
  {path: 'login',component:PrachiloginComponent},
  {path:'forgot-password',component:PrachiforgotPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: PrachinotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
