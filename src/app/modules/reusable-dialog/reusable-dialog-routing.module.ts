import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReusableDialogComponent } from './reusable-dialog.component';

const routes: Routes = [{ path: '', component: ReusableDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableDialogRoutingModule { }
