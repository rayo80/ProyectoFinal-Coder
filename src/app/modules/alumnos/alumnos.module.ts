import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomModule } from 'src/app/shared/custom/custom.module';
import { AlumnosCrudComponent } from './alumnos-crud/alumnos-crud.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';


@NgModule({
  declarations: [
    AlumnosTableComponent,
    AlumnosFormComponent,
    AlumnosCrudComponent,
    AlumnosDetalleComponent
  ],
  imports: [
    AlumnosRoutingModule,
    SharedModule,
    CustomModule,
  ],
  exports: [
  ]
})
export class AlumnosModule { }
