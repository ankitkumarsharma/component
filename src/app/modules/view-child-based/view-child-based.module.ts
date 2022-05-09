import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildBasedRoutingModule } from './view-child-based-routing.module';
import { ViewChildBasedComponent } from './view-child-based.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ViewChildBasedComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ViewChildBasedRoutingModule,
    SharedModule
  ]
})
export class ViewChildBasedModule { }
