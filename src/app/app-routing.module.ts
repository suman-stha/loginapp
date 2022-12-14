import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {

    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
