import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';
import { AlumnoContentComponent } from './alumno-content.component';
import { AngularMaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomModule } from '../shared/custom/custom.module';

@NgModule({
  declarations: [
    AlumnoContentComponent,
    AlumnosTableComponent,
    AlumnosFormComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CustomModule,
  ],
  exports: [
  ]
})
export class AlumnosModule { }
