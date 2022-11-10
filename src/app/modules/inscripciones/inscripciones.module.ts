
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { InscripcionesTableComponent } from './inscripciones-table/inscripciones-table.component';
import { InscripcionesFormComponent } from './inscripciones-form/inscripciones-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { inscripcionesRoutes } from './inscripciones.routing';
import { InscripcionesComponent } from './inscripciones.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InscripcionesTableComponent,
    InscripcionesFormComponent,
    InscripcionesComponent
  ],
  imports: [
    RouterModule.forChild(inscripcionesRoutes),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]

})
export class InscripcionesModule { }
