import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { PrachidirectivesComponent } from './prachidirectives/prachidirectives.component';
//import { NestedformComponent } from './nestedform/nestedform.component';
//import { AddingComponent } from './adding/adding.component';
//import { ShowComponent } from './show/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    PrachidirectivesComponent,
   
    
    
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
