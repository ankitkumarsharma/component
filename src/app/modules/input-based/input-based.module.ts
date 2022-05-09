import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBasedRoutingModule } from './input-based-routing.module';
import { InputBasedComponent } from './input-based.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [InputBasedComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    InputBasedRoutingModule,
    SharedModule
  ]
})
export class InputBasedModule { }
