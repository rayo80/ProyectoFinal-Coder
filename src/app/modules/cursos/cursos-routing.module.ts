import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCustomTableComponent } from './cursos-custom-table/cursos-custom-table.component';
import { CursosTableComponent } from './cursos-table/cursos-table.component';

const routes: Routes = [
  {
    path: "",
    component: CursosCustomTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
