import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { ConfigProfileComponent } from './components/config-profile/config-profile.component';
import { ConfigSkillsComponent } from './components/config-skills/config-skills.component';
import { ConfigProjectsComponent } from './components/config-projects/config-projects.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialComponent } from './components/social/social.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { SkillsUserComponent } from './components/skills-user/skills-user.component';
import { ProjectsUserComponent } from './components/projects-user/projects-user.component';
import { SocialUserComponent } from './components/social-user/social-user.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { HeroUserComponent } from './components/hero-user/hero-user.component';
import { BuildingComponent } from './components/building/building.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { NoprojectsComponent } from './components/noprojects/noprojects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
    ConfigProfileComponent,
    ConfigSkillsComponent,
    ConfigProjectsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    SocialComponent,
    HomeUserComponent,
    HeaderUserComponent,
    AboutUserComponent,
    SkillsUserComponent,
    ProjectsUserComponent,
    SocialUserComponent,
    MainUserComponent,
    HeroUserComponent,
    BuildingComponent,
    ArgprogComponent,
    NoprojectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
