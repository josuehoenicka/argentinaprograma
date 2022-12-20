import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { AboutComponent } from './components/about/about.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProjectsComponent } from './components/add-projects/add-projects.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { BuildingComponent } from './components/building/building.component';
import { ConfigEducationComponent } from './components/config-education/config-education.component';
import { ConfigExperiencesComponent } from './components/config-experiences/config-experiences.component';
import { ConfigLangsComponent } from './components/config-langs/config-langs.component';
import { ConfigProfileComponent } from './components/config-profile/config-profile.component';
import { ConfigProjectsComponent } from './components/config-projects/config-projects.component';
import { ConfigSkillsComponent } from './components/config-skills/config-skills.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoprojectsComponent } from './components/noprojects/noprojects.component';
import { ProjectsUserComponent } from './components/projects-user/projects-user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { SkillsUserComponent } from './components/skills-user/skills-user.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialUserComponent } from './components/social-user/social-user.component';
import { SocialComponent } from './components/social/social.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeUserComponent
  },
  {
    path: 'home/user/about',
    component: AboutUserComponent
  },
  {
    path: 'home/user/skills',
    component: SkillsUserComponent
  },
  {
    path: 'home/user/projects',
    component: ProjectsUserComponent
  },
  {
    path: 'home/user/social',
    component: SocialUserComponent
  },
  {
    path: 'home/about',
    component: AboutComponent
  },
  {
    path: 'home/skills',
    component: SkillsComponent
  },
  {
    path: 'home/projects',
    component: ProjectsComponent
  },
  {
    path: 'home/social',
    component: SocialComponent
  },
  {
    path: 'configure/profile',
    component: ConfigProfileComponent
  },
  {
    path: 'configure/projects',
    component: ConfigProjectsComponent
  },
  {
    path: 'configure/skills',
    component: ConfigSkillsComponent
  },
  {
    path: 'configure/education',
    component: ConfigEducationComponent
  },
  {
    path: 'configure/experiences',
    component: ConfigExperiencesComponent
  },
  {
    path: 'configure/langs',
    component: ConfigLangsComponent
  },
  {
    path: 'building',
    component: BuildingComponent
  },
  {
    path: 'projects/working',
    component: NoprojectsComponent
  },
  {
    path: 'argprog',
    component: ArgprogComponent
  },
  {
    path: 'add/education',
    component: AddEducationComponent
  },
  {
    path: 'add/experience',
    component: AddExperienceComponent
  },
  {
    path: 'add/projects',
    component: AddProjectsComponent
  },
  {
    path: '**',
    component: BuildingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
