import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageHomeComponent } from './garage-home/garage-home.component';
import { GarageSparePartsComponent } from './garage-spare-parts/garage-spare-parts.component';
import { GarageAboutComponent } from './garage-about/garage-about.component';
import { GarageSpecialtyComponent } from './garage-specialty/garage-specialty.component';

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
    component: GarageSpecialtyComponent,
  },
  {
    path: 'list',
    component: GarageSparePartsComponent,
  },
  {
    path: 'about',
    component: GarageAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
