import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';
import { AlumnoContentComponent } from './alumno-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomModule } from 'src/app/shared/custom/custom.module';


@NgModule({
  declarations: [
    AlumnoContentComponent,
    AlumnosTableComponent,
    AlumnosFormComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    CustomModule,
  ],
  exports: [
  ]
})
export class AlumnosModule { }
