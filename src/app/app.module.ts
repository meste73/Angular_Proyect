import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparePartsListComponent } from './spare-parts-list/spare-parts-list.component';
import { SparePartsCartComponent } from './spare-parts-cart/spare-parts-cart.component';

import { FormsModule } from '@angular/forms';
import { GarageSparePartsComponent } from './garage-spare-parts/garage-spare-parts.component';
import { GarageHomeComponent } from './garage-home/garage-home.component';
import { GarageAboutComponent } from './garage-about/garage-about.component';
import { GarageSpecialtyComponent } from './garage-specialty/garage-specialty.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    SparePartsListComponent,
    SparePartsCartComponent,
    GarageSparePartsComponent,
    GarageHomeComponent,
    GarageAboutComponent,
    GarageSpecialtyComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
