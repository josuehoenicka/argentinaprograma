import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { NavComponent } from './nav/nav/nav.component';
import { EducationComponent } from './pages/config/education/education.component';
import { ExperienceComponent } from './pages/config/experience/experience.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    NavComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
