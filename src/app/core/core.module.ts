import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AngularMaterialModule } from '../modules/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavigationBarComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    NavigationBarComponent,
    SidenavComponent

  ]
})
export class CoreModule { }
