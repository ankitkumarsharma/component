import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutputBasedComponent } from './output-based.component';

const routes: Routes = [{ path: '', component: OutputBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputBasedRoutingModule { }
