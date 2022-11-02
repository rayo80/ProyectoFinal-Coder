import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './core/guards/activate.guard';
import { TeacherGuard } from './core/guards/role.guard';
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
      canActivate: [ActivateGuard, TeacherGuard],
      loadChildren: () => import('./profesores/profesores.module').then((m) => m.ProfesoresModule),
      data: {
        roles: ["profesor","admin"]
      }
    },
    {
      path: "cursos",
      canActivate: [ActivateGuard, TeacherGuard],
      loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
      data: {
        roles: ["profesor","admin"]
      }
    },
    {
      path: "inscripciones",
      canActivate: [ActivateGuard],
      loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
      data: {
        role: "admin"
      }
    },
    {
      path: "usuarios",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
      data: {
        role: "admin"
      }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
