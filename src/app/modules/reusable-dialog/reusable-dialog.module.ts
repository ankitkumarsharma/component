import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableDialogRoutingModule } from './reusable-dialog-routing.module';
import { ReusableDialogComponent } from './reusable-dialog.component';


@NgModule({
  declarations: [ReusableDialogComponent],
  imports: [
    CommonModule,
    ReusableDialogRoutingModule,
    SharedModule
  ]
})
export class ReusableDialogModule { }
