import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { AboutDetailPageComponent } from '../about-detail-page/about-detail-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    AboutDetailPageComponent,
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule { }
