import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    DashboardComponent,
    SharedModule
  ]
})

export class MainModule { }
