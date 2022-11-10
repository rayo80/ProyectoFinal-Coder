import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosTableComponent } from './cursos-table/cursos-table.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CursosComponent,
    CursosFormComponent,
    CursosTableComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
  ]
})
export class CursosModule { }
