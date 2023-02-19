import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAboutComponent } from './pages/about/about.component';
import { UserContactComponent } from './pages/contact/contact.component';
import { UserHomeComponent } from './pages/home/home.component';
import { UserProjectsComponent } from './pages/projects/projects.component';
import { UserSkillsComponent } from './pages/skills/skills.component';
import { ConfigExperienceComponent } from './pages/config/experience/experience.component';
import { ConfigLanguagesComponent } from './pages/config/languages/languages.component';
import { ConfigProfileComponent } from './pages/config/profile/profile.component';
import { ConfigProjectsComponent } from './pages/config/projects/projects.component';
import { ConfigEducationComponent } from './pages/config/education/education.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: UserHomeComponent
  },
  {
    path: 'userabout',
    component: UserAboutComponent
  },
  {
    path: 'userskills',
    component: UserSkillsComponent
  },
  {
    path: 'userprojects',
    component: UserProjectsComponent
  },
  {
    path: 'usercontact',
    component: UserContactComponent
  },
  {
    path: 'configureducation',
    component: ConfigEducationComponent
  },
  {
    path: 'configurexperience',
    component: ConfigExperienceComponent
  },
  {
    path: 'configurelanguages',
    component: ConfigLanguagesComponent
  },
  {
    path: 'configureprofile',
    component: ConfigProfileComponent
  },
  {
    path: 'configureprojects',
    component: ConfigProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
