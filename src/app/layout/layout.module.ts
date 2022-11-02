import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../core/components/sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../modules/material.module';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports:[
    ToolbarComponent,
  ]
})
export class LayoutModule { }
