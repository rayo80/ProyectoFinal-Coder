import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';

//ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AlumnosRoutingModule } from './alumnos/alumnos-routing.module';
import { ProfesoresRoutingModule } from './profesores/profesores-routing.module';
import { InscripcionesRoutingModule } from './inscripciones/inscripciones-routing.module';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ToolbarComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,

    AppRoutingModule,
    AlumnosRoutingModule,
    CursosRoutingModule,
    ProfesoresRoutingModule,
    InscripcionesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
