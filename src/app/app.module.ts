import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageSparePartsComponent } from './components/garage-spare-parts/garage-spare-parts.component';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';
import { GarageAboutComponent } from './components/garage-about/garage-about.component';
import { GarageJobsComponent } from './components/garage-jobs/garage-jobs.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { JobsListComponent } from './components/garage-jobs/jobs-list/jobs-list.component';
import { SparePartsListComponent } from './components/garage-spare-parts/spare-parts-list/spare-parts-list.component';
import { SparePartsCartComponent } from './components/garage-spare-parts/spare-parts-cart/spare-parts-cart.component';
import { JobsFormComponent } from './components/garage-jobs/jobs-form/jobs-form.component';
import { GarageLoginComponent } from './components/garage-login/garage-login.component';
import { ArticleComponent } from './components/garage-spare-parts/spare-parts-list/article/article.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    JobsFormComponent,
    GarageLoginComponent,
    ArticleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
