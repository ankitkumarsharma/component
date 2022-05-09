import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputBasedComponent } from './input-based.component';

const routes: Routes = [{ path: '', component: InputBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputBasedRoutingModule {
 }
