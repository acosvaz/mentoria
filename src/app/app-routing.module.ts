import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'home', component: HomeComponent},
 {path: 'registro', component: RegistroComponent},
 {path: 'login', component: LoginComponent},
 {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
