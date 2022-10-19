import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrachiloginComponent } from './components/prachilogin/prachilogin.component';
import { PrachiforgotPasswordComponent } from './components/prachiforgot-password/prachiforgot-password.component';
import { PrachinotFoundComponent } from './components/prachinot-found/prachinot-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PrachiloginComponent,
    PrachiforgotPasswordComponent,
    PrachinotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
