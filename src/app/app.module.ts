import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstJobFormComponent } from './first-job-form/first-job-form.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AlumniService } from './alumni.service';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconsComponent } from './icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstJobFormComponent,
    GridViewComponent,
    IconsComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
  ],
  providers: [AlumniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
