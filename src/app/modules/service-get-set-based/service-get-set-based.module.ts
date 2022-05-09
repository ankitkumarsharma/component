import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceGetSetBasedRoutingModule } from './service-get-set-based-routing.module';
import { ServiceGetSetBasedComponent } from './service-get-set-based.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ServiceGetSetBasedComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ServiceGetSetBasedRoutingModule,
    SharedModule
  ]
})
export class ServiceGetSetBasedModule { }
