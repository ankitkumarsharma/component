import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableFormsRoutingModule } from './reusable-forms-routing.module';
import { ReusableFormsComponent } from './reusable-forms.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [ReusableFormsComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    ReusableFormsRoutingModule,
    SharedModule
  ]
})
export class ReusableFormsModule { }
