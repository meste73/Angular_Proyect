import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';
import { GarageSparePartsComponent } from './components/garage-spare-parts/garage-spare-parts.component';
import { GarageAboutComponent } from './components/garage-about/garage-about.component';
import { GarageJobsComponent } from './components/garage-jobs/garage-jobs.component';
import { GarageLoginComponent } from './components/garage-login/garage-login.component';

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
    path: 'specialty',
    component: GarageJobsComponent,
  },
  {
    path: 'list',
    component: GarageSparePartsComponent,
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
