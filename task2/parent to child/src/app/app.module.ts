import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrachichildComponent } from './prachichild/prachichild.component';
import { PrachiparentComponent } from './prachiparent/prachiparent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrachichildComponent,
    PrachiparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
