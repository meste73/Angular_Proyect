import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';
import { GarageSparePartsComponent } from './components/garage-spare-parts/garage-spare-parts.component';
import { GarageAboutComponent } from './components/garage-about/garage-about.component';
import { GarageJobsComponent } from './components/garage-jobs/garage-jobs.component';
import { GarageLoginComponent } from './components/garage-login/garage-login.component';
import { RuteGuard } from './rute.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: GarageHomeComponent,
  },
  {
    path: 'jobs',
    component: GarageJobsComponent,
    canActivate: [RuteGuard]
  },
  {
    path: 'cart',
    component: GarageSparePartsComponent,
    canActivate: [RuteGuard]
  },
  {
    path: 'about',
    component: GarageAboutComponent,
  },
  {
    path: 'login',
    component: GarageLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
