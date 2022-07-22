import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './core/guards/activate.guard';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
    },
    {
      path: "login",
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    {
      path: "alumnos",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    },
    {
      path: "profesores",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./profesores/profesores.module').then((m) => m.ProfesoresModule),
    },
    {
      path: "cursos",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    },
    {
      path: "inscripciones",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    },
    {
      path: "usuarios",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
