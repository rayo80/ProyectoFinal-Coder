import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from './list-base.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    ListBaseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListBaseComponent,
  ]
})
export class ListBaseModule { }
