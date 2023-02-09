import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgprogComponent } from './pages/argprog/argprog.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'argprog',
    component: ArgprogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
