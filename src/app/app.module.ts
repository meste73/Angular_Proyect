import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageSparePartsComponent } from './garage-spare-parts/garage-spare-parts.component';
import { GarageHomeComponent } from './garage-home/garage-home.component';
import { GarageAboutComponent } from './garage-about/garage-about.component';
import { GarageJobsComponent } from './garage-jobs/garage-jobs.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { SparePartsListComponent } from './spare-parts-list/spare-parts-list.component';
import { SparePartsCartComponent } from './spare-parts-cart/spare-parts-cart.component';
import { JobsFormComponent } from './jobs-form/jobs-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GarageSparePartsComponent,
    GarageHomeComponent,
    GarageAboutComponent,
    GarageJobsComponent,
    InputIntegerComponent,
    JobsListComponent,
    SparePartsListComponent,
    SparePartsCartComponent,
    JobsFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
