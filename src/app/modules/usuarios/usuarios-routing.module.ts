import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosTableComponent } from './usuarios-table/usuarios-table.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
