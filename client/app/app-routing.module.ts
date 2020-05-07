import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { ProgramComponent} from './program/program.component';
import {  BlogComponent } from './blog/blog.component';
import {  AboutComponent } from './about/about.component';
import { EbooksComponent } from './ebooks/ebooks.component'
import { PythonComponent } from './courses/python/python.component';
import { TypescriptComponent } from './courses/typescript/typescript.component';
import { FlaskComponent } from './courses/flask/flask.component';
import { JavascriptComponent } from './courses/javascript/javascript.component';
import { AngularComponent } from './courses/angular/angular.component';
import { ReactComponent } from './courses/react/react.component';

const routes: Routes = [

 { path: '',pathMatch:"full", component: HomeComponent},
 { path: 'program',           component:  ProgramComponent}, 
 { path: 'blog',              component:  BlogComponent}, 
 { path: 'about',             component: AboutComponent},
 { path: 'ebooks',            component: EbooksComponent},

 //courses
 { path: 'Python',      component: PythonComponent},
 { path: 'TypeScript',  component: TypescriptComponent},
 { path: 'Flask',       component: FlaskComponent },
 { path: 'JavaScript',  component: JavascriptComponent},
 { path: 'Angular',     component: AngularComponent},
 { path: 'React',       component: ReactComponent }

]

@NgModule({
  imports:
   [RouterModule.forRoot(routes)],

      exports: [RouterModule]
})
export class AppRoutingModule { }
