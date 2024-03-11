import { DetailBaseComponent } from './../detail-base/detail-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from './list-base.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectBaseComponent } from '../select-base/select-base.component';



@NgModule({
  declarations: [
    ListBaseComponent,
    DetailBaseComponent,
    ModalBaseComponent,
    SelectBaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListBaseComponent,
    DetailBaseComponent,
    ModalBaseComponent,
    SelectBaseComponent
  ]
})
export class ListBaseModule { }
