import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosTableComponent } from './cursos-table/cursos-table.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListBaseModule } from '../plantillas/list-base/list-base.module';
import { CursosCustomTableComponent } from './cursos-custom-table/cursos-custom-table.component';



@NgModule({
  declarations: [
    CursosFormComponent,
    CursosTableComponent,
    CursosCustomTableComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ListBaseModule
  ]
})
export class CursosModule { }
