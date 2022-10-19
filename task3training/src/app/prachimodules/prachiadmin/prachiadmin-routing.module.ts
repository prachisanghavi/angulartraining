import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrachiaboutComponent } from './prachicomponents/prachiabout/prachiabout.component';
import { PrachiadminDashboardComponent } from './prachicomponents/prachiadmin-dashboard/prachiadmin-dashboard.component';
import { PrachicontactComponent } from './prachicomponents/prachicontact/prachicontact.component';
import { PrachihomeComponent } from './prachicomponents/prachihome/prachihome.component';
import { PrachiservicesComponent } from './prachicomponents/prachiservices/prachiservices.component';

const routes: Routes = [
  {path: '', component: PrachiadminDashboardComponent,
  children:[
    {path: 'home',component:PrachihomeComponent},
    {path: 'about',component:PrachiaboutComponent},
    {path: 'services',component:PrachiservicesComponent},
    {path: 'contact',component:PrachicontactComponent},
    {path: '',redirectTo:'/admin/home',pathMatch:'full'},
   ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrachiadminRoutingModule { }
