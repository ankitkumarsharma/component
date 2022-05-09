import { CustomerFormComponent } from './customer-form/customer-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReusableFormsComponent } from './reusable-forms.component';

const routes: Routes = [
  { path: '', component: ReusableFormsComponent },
  { path: 'customer-form', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableFormsRoutingModule { }
