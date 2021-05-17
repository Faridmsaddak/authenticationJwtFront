import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './authontification/login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { ProfilComponent } from './authontification/profil/profil.component';
import { authInterceptorProviders } from './interceptor/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegsiterComponent } from './authontification/regsiter/regsiter.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegsiterComponent,
    LoginComponent,
    ProfilComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
