import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationBarComponent,
    SidenavComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavigationBarComponent,
    SidenavComponent

  ]
})
export class CoreModule { }
