import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/components/main/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/components/main/users/users.component';
import { PagenotfoundComponent } from 'src/app/components/main/pagenotfound/pagenotfound.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }