import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDetailPageComponent } from '../about-detail-page/about-detail-page.component';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [
  {path: "", component: AboutPageComponent},
  {path: ":idUser", component: AboutDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
