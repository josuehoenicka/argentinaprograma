import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArgprogComponent } from './pages/argprog/argprog.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './nav/nav/nav.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    ArgprogComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  exports: [

  ]
})
export class ViewModule { }
