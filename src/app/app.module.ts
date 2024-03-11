import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

import { LoginRoutingModule } from './login/login-routing.module';
import { AlumnosRoutingModule } from './modules/alumnos/alumnos-routing.module';
import { CursosRoutingModule } from './modules/cursos/cursos-routing.module';
import { ProfesoresRoutingModule } from './modules/profesores/profesores-routing.module';
import { UsuariosRoutingModule } from './modules/usuarios/usuarios-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { SharedModule } from './shared/shared.module';


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
    CoreModule,
    SharedModule,
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
