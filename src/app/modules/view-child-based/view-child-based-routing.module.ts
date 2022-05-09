import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChildBasedComponent } from './view-child-based.component';

const routes: Routes = [{ path: '', component: ViewChildBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildBasedRoutingModule { }
