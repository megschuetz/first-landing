import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstJobFormComponent } from './first-job-form/first-job-form.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'form', component: FirstJobFormComponent },
  {path: 'grid', component: GridViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
