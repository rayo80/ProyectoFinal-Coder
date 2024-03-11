import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuariosTableComponent } from './usuarios-table/usuarios-table.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosTableComponent,
  },
  { 
    path: 'detalle/:id',
    component: UsuarioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
