import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstJobFormComponent } from './components/first-job-form/first-job-form.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShortHeaderComponent } from './components/short-header/short-header.component';

import { AlumniService } from './alumni.service';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconsComponent } from './icons/icons.component';
import { StoriesFeedComponent } from './components/stories-feed/stories-feed.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { isPlatformBrowser } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FirstJobFormComponent,
    GridViewComponent,
    IconsComponent,
    LandingPageComponent,
    StoriesFeedComponent,
    ReviewModalComponent,
    ShortHeaderComponent
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
    MatDialogModule, 
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [AlumniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
