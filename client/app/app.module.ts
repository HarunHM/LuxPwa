import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProgramComponent } from './program/program.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EbooksComponent } from './ebooks/ebooks.component';
//courses components
import { PythonComponent } from './courses/python/python.component';
import { TypescriptComponent } from './courses/typescript/typescript.component';
import { FlaskComponent } from './courses/flask/flask.component';
import { JavascriptComponent } from './courses/javascript/javascript.component';
import { AngularComponent } from './courses/angular/angular.component';
import { ReactComponent } from './courses/react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProgramComponent,
    EbooksComponent,
    PythonComponent,
    TypescriptComponent,
    FlaskComponent,
    JavascriptComponent,
    AngularComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  
  ],
  
  //add services @ provider array
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
