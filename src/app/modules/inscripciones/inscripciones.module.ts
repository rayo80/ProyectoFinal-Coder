import { ListBaseModule } from './../plantillas/list-base/list-base.module';
import { ListBaseComponent } from './../plantillas/list-base/list-base.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { InscripcionesTableComponent } from './inscripciones-table/inscripciones-table.component';
import { InscripcionesFormComponent } from './inscripciones-form/inscripciones-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { inscripcionesRoutes } from './inscripciones.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InscripcionesTableComponent,
    InscripcionesFormComponent
  ],
  imports: [
    RouterModule.forChild(inscripcionesRoutes),
    CommonModule,
    SharedModule,
    ListBaseModule,
    ReactiveFormsModule,
  ]

})
export class InscripcionesModule { }
