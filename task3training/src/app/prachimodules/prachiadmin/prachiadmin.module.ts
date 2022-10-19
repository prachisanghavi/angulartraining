import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrachiadminRoutingModule } from './prachiadmin-routing.module';
import { PrachiadminDashboardComponent } from './prachicomponents/prachiadmin-dashboard/prachiadmin-dashboard.component';
import { PrachiheaderComponent } from './prachicomponents/prachiheader/prachiheader.component';
import { PrachifooterComponent } from './prachicomponents/prachifooter/prachifooter.component';
import { PrachihomeComponent } from './prachicomponents/prachihome/prachihome.component';
import { PrachiaboutComponent } from './prachicomponents/prachiabout/prachiabout.component';
import { PrachicontactComponent } from './prachicomponents/prachicontact/prachicontact.component';
import { PrachiservicesComponent } from './prachicomponents/prachiservices/prachiservices.component';


@NgModule({
  declarations: [
    PrachiadminDashboardComponent,
    PrachiheaderComponent,
    PrachifooterComponent,
    PrachihomeComponent,
    PrachiaboutComponent,
    PrachicontactComponent,
    PrachiservicesComponent
  ],
  imports: [
    CommonModule,
    PrachiadminRoutingModule
  ]
})
export class PrachiadminModule { }
