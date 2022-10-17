import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PrachieditComponent } from './prachiedit/prachiedit.component';
//import { PrachiaddComponent } from './prachiadd/prachiadd.component';
//import { PrachishowComponent } from './prachishow/prachishow.component';

@NgModule({
  declarations: [
    AppComponent,
    //PrachieditComponent,
   // PrachiaddComponent,
    //PrachishowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
