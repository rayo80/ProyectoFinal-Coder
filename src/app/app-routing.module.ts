import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ActivateGuard } from './core/guards/activate.guard';
import { TeacherGuard } from './core/guards/role.guard';


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
      loadChildren: () => import('./modules/alumnos/alumnos.module').then((m) => m.AlumnosModule),
    },
    {
      path: "profesores",
      canActivate: [ActivateGuard, TeacherGuard],
      loadChildren: () => import('./modules/profesores/profesores.module').then((m) => m.ProfesoresModule),
      data: {
        roles: ["profesor","admin"]
      }
    },
    {
      path: "cursos",
      canActivate: [ActivateGuard, TeacherGuard],
      loadChildren: () => import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
      data: {
        roles: ["profesor","admin"]
      }
    },
    {
      path: "inscripciones",
      canActivate: [ActivateGuard],
      loadChildren: () => import('./modules/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
      data: {
        role: "admin"
      }
    },
    {
      path: "usuarios",
      canActivate: [ActivateGuard,],
      loadChildren: () => import('./modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
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
