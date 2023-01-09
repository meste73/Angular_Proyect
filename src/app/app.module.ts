import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GarageSparePartsComponent } from './components/garage-spare-parts/garage-spare-parts.component';
import { GarageHomeComponent } from './components/garage-home/garage-home.component';
import { GarageAboutComponent } from './components/garage-about/garage-about.component';
import { GarageJobsComponent } from './components/garage-jobs/garage-jobs.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { SparePartsListComponent } from './components/garage-spare-parts/spare-parts-list/spare-parts-list.component';
import { SparePartsCartComponent } from './components/garage-spare-parts/spare-parts-cart/spare-parts-cart.component';
import { JobsFormComponent } from './components/garage-jobs/jobs-form/jobs-form.component';
import { GarageLoginComponent } from './components/garage-login/garage-login.component';
import { ArticleComponent } from './components/garage-spare-parts/spare-parts-list/article/article.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GarageSparePartsComponent,
    GarageHomeComponent,
    GarageAboutComponent,
    GarageJobsComponent,
    InputIntegerComponent,
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
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
