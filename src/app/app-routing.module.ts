import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstJobFormComponent } from './components/first-job-form/first-job-form.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StoriesFeedContainerComponent } from './components/discover/stories-feed-container/stories-feed-container.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'form', component: FirstJobFormComponent },
  {path: 'grid', component: GridViewComponent},
  {path: 'feed', component: StoriesFeedContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
