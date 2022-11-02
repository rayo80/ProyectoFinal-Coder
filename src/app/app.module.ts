import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularMaterialModule } from './modules/material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

//ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AlumnosRoutingModule } from './alumnos/alumnos-routing.module';
import { ProfesoresRoutingModule } from './profesores/profesores-routing.module';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { UsuariosRoutingModule } from './usuarios/usuarios-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    CoreModule,
  
    AppRoutingModule,
    AlumnosRoutingModule,
    CursosRoutingModule,
    ProfesoresRoutingModule,
    UsuariosRoutingModule,
    LoginRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
