import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AumentarDirective } from './aumentar.directive';
import { JoinPipe } from './join.pipe';


@NgModule({
  declarations: [
    JoinPipe,
    AumentarDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AumentarDirective,
    CommonModule,
    JoinPipe
  ]
})
export class CustomModule { }