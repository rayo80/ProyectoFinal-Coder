
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoContentComponent } from './alumno-content.component';

const routes: Routes = [
  {
    path: "",
    component: AlumnoContentComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
