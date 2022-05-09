import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

import { ServiceGetSetBasedComponent } from './service-get-set-based.component';

const routes: Routes = [
  { path: '',pathMatch:'full', component: ServiceGetSetBasedComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceGetSetBasedRoutingModule { }
