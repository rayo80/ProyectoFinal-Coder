import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesorAgregarComponent } from './profesor-agregar/profesor-agregar.component';
import { ProfesorEditarComponent } from './profesor-editar/profesor-editar.component';
import { ProfesorDetalleComponent } from './profesor-detalle/profesor-detalle.component';
import { ProfesorInicioComponent } from './profesor-inicio/profesor-inicio.component';
import { ProfesorListaComponent } from './profesor-lista/profesor-lista.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfesorAgregarComponent,
    ProfesorEditarComponent,
    ProfesorDetalleComponent,
    ProfesorInicioComponent,
    ProfesorListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
