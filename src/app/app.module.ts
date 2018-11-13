import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PagenotfoundComponent } from './components/main/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';


import { HeaderComponent } from './components/shared/header/header.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { FloatingButtonComponent } from './components/shared/floating-button/floating-button.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './modules/main/main.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,


    HeaderComponent,
    SidenavComponent,
    BreadcrumbsComponent,
    FloatingButtonComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
