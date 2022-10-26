import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageFormComponent } from './components/contact-page-form/contact-page-form.component';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactPageFormComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    SharedModule
  ]
})
export class ContactPageModule { }
