import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/components/main/users/users.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    DashboardComponent,
    UsersComponent
  ]
})

export class MainModule { }