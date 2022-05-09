import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'input-based', loadChildren: () => import('./modules/input-based/input-based.module').then(m => m.InputBasedModule) },
  { path: 'output-based', loadChildren: () => import('./modules/output-based/output-based.module').then(m => m.OutputBasedModule) },
  { path: 'view-child-based', loadChildren: () => import('./modules/view-child-based/view-child-based.module').then(m => m.ViewChildBasedModule) },
  { path: 'service-based', loadChildren: () => import('./modules/service-get-set-based/service-get-set-based.module').then(m => m.ServiceGetSetBasedModule) },
  { path: 'reusable-forms', loadChildren: () => import('./modules/reusable-forms/reusable-forms.module').then(m => m.ReusableFormsModule) },
  { path: 'reusable-dialog', loadChildren: () => import('./modules/reusable-dialog/reusable-dialog.module').then(m => m.ReusableDialogModule) },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
