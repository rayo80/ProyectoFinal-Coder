import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularMaterialModule } from './modules/material.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

//ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AlumnosRoutingModule } from './alumnos/alumnos-routing.module';
import { ProfesoresRoutingModule } from './profesores/profesores-routing.module';
import { InscripcionesRoutingModule } from './inscripciones/inscripciones-routing.module';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { UsuariosRoutingModule } from './usuarios/usuarios-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


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
    LayoutModule,
  
    AppRoutingModule,
    AlumnosRoutingModule,
    CursosRoutingModule,
    ProfesoresRoutingModule,
    InscripcionesRoutingModule,
    UsuariosRoutingModule,
    AuthRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
