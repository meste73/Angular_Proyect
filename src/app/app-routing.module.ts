import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageHomeComponent } from './garage-home/garage-home.component';
import { GarageSparePartsComponent } from './garage-spare-parts/garage-spare-parts.component';
import { GarageAboutComponent } from './garage-about/garage-about.component';
import { GarageJobsComponent } from './garage-jobs/garage-jobs.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
