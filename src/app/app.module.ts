import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstJobFormComponent } from './components/first-job-form/first-job-form.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShortHeaderComponent } from './components/short-header/short-header.component';

import { AlumniService } from './alumni.service';

import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { IconsComponent } from './icons/icons.component';
import { StoriesFeedContainerComponent } from './components/stories-feed-container/stories-feed-container.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { ButtonComponent } from './components/button/button.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoriesFeedComponent } from './components/stories-feed/stories-feed.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FirstJobFormComponent,
    GridViewComponent,
    IconsComponent,
    LandingPageComponent,
    StoriesFeedContainerComponent,
    ReviewModalComponent,
    ShortHeaderComponent,
    ButtonComponent,
    StoriesFeedComponent,
    SearchBarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule, 
    MatProgressSpinnerModule,
    FormsModule, 
    MatSelectModule,
    MatIconModule
  ],
  providers: [AlumniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
