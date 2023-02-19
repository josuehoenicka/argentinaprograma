import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { NavComponent } from './nav/nav/nav.component';
import { ConfigEducationComponent } from './pages/config/education/education.component';
import { ConfigExperienceComponent } from './pages/config/experience/experience.component';
import { ConfigLanguagesComponent} from './pages/config/languages/languages.component';
import { ConfigProfileComponent } from './pages/config/profile/profile.component';
import { ConfigProjectsComponent } from './pages/config/projects/projects.component';
import { AddExperienceComponent } from './pages/add/experience/experience.component';
import { AddEducationComponent } from './pages/add/education/education.component';
import { AddProjectsComponent } from './pages/add/projects/projects.component';


@NgModule({
  declarations: [
    UserAboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    NavComponent,
    ConfigEducationComponent,
    ConfigExperienceComponent,
    ConfigLanguagesComponent,
    ConfigProfileComponent,
    ConfigProjectsComponent,
    AddExperienceComponent,
    AddEducationComponent,
    AddProjectsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
