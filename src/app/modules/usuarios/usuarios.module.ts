import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosTableComponent } from './usuarios-table/usuarios-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CustomModule } from 'src/app/shared/custom/custom.module';



@NgModule({
  declarations: [
    UsuariosTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule,
    CustomModule

  ]
})
export class UsuariosModule { }
