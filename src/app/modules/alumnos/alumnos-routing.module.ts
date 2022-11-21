
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosCrudComponent } from './alumnos-crud/alumnos-crud.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosTableComponent } from './alumnos-table/alumnos-table.component';


const routes: Routes = [
  {
    path: "",
    component: AlumnosCrudComponent,children: [
      // podria agregar otras rutas pero lo veo innecesario mejor es con modal
      { path: 'detalle/:id', component: AlumnosDetalleComponent },
      { path: 'listar', component: AlumnosTableComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
