
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { InscripcionesTableComponent } from './inscripciones-table/inscripciones-table.component';
import { InscripcionesFormComponent } from './inscripciones-form/inscripciones-form.component';
import { AngularMaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { inscripcionesRoutes } from './inscripciones.routing';
import { InscripcionesComponent } from './inscripciones.component';


@NgModule({
  declarations: [
    InscripcionesTableComponent,
    InscripcionesFormComponent,
    InscripcionesComponent
  ],
  imports: [
    RouterModule.forChild(inscripcionesRoutes),
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]

})
export class InscripcionesModule { }
