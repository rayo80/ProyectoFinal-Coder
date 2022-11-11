import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorAgregarComponent } from './profesor-agregar/profesor-agregar.component';
import { ProfesorDetalleComponent } from './profesor-detalle/profesor-detalle.component';
import { ProfesorEditarComponent } from './profesor-editar/profesor-editar.component';
import { ProfesorInicioComponent } from './profesor-inicio/profesor-inicio.component';
import { ProfesorListaComponent } from './profesor-lista/profesor-lista.component';

const routes: Routes = [
  { path: '', component: ProfesorInicioComponent, children: [
    { path: 'listar', component: ProfesorListaComponent },
    { path: 'editar', component: ProfesorEditarComponent },
    { path: 'agregar', component: ProfesorAgregarComponent},
    { path: ':id', component: ProfesorDetalleComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
