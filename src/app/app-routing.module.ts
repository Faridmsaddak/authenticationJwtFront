import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authontification/login/login.component';

import { RegsiterComponent } from './authontification/regsiter/regsiter.component';
import { ProfilComponent } from './authontification/profil/profil.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegsiterComponent },
  { path: 'registerUser', component: RegsiterComponent },
  { path: 'profile', component: ProfilComponent },
 
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }