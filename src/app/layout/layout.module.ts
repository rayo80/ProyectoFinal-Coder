import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../modules/material.module';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports:[
    ToolbarComponent,
    SidenavComponent,
  ]
})
export class LayoutModule { }
