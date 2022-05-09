import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputBasedRoutingModule } from './output-based-routing.module';
import { OutputBasedComponent } from './output-based.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OutputBasedComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    OutputBasedRoutingModule,
    SharedModule
  ]
})
export class OutputBasedModule { }
