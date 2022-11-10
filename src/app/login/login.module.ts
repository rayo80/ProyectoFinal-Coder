import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AngularMaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class LoginModule { }
