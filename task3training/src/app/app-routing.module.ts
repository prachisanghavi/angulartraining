import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrachiforgotPasswordComponent } from './components/prachiforgot-password/prachiforgot-password.component';
import { PrachiloginComponent } from './components/prachilogin/prachilogin.component';
import { PrachinotFoundComponent } from './components/prachinot-found/prachinot-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login',component:PrachiloginComponent},
  {path:'forgot-password',component:PrachiforgotPasswordComponent},
  {path:'admin',canActivate:[AuthGuard],loadChildren:()=> import('./prachimodules/prachiadmin/prachiadmin.module').then((m)=>m.PrachiadminModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path: '**', component: PrachinotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
