import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ActivateGuard } from './core/guards/activate.guard';
import { RoleGuard } from './core/guards/role.guard';


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
      canActivate: [ActivateGuard, RoleGuard],
      loadChildren: () => import('./modules/alumnos/alumnos.module').then((m) => m.AlumnosModule),
      data: {
        roles: ["profesor", "admin"]
      }
    },
    {
      path: "profesores",
      canActivate: [ActivateGuard, RoleGuard],
      loadChildren: () => import('./modules/profesores/profesores.module').then((m) => m.ProfesoresModule),
      data: {
        roles: ["profesor", "admin"]
      }
    },
    {
      path: "cursos",
      canActivate: [ActivateGuard, RoleGuard],
      loadChildren: () => import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
      data: {
        roles: ["profesor", "admin"]
      }
    },
    {
      path: "inscripciones",
      canActivate: [ActivateGuard, RoleGuard],
      loadChildren: () => import('./modules/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
      data: {
        roles: "admin"
      }
    },
    {
      path: "usuarios",
      canActivate: [ActivateGuard, RoleGuard],
      loadChildren: () => import('./modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
      data: {
        roles: []
      }
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
