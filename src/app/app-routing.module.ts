import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { ProgramComponent} from './program/program.component';
import {  BlogComponent } from './blog/blog.component';
import {  AboutComponent } from './about/about.component';
import {  SignupComponent } from './signup/signup.component';
import { LoginComponent} from './login/login.component'


const routes: Routes = [
 { path: '',pathMatch:"full", component: HomeComponent},
 { path: 'program',  component:  ProgramComponent}, 
 { path: 'blog',  component:  BlogComponent}, 
 { path: 'about', component: AboutComponent},

 { path: 'signup', component: SignupComponent},
 { path: 'login',  component: LoginComponent}


]

@NgModule({
  imports:
   [RouterModule.forRoot(routes)],

      exports: [RouterModule]
})
export class AppRoutingModule { }
