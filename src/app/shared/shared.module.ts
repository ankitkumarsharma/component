import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AkTitleComponent } from './forms/ak-title/ak-title.component';
import { AkBodyComponent } from './forms/ak-body/ak-body.component';
import { AkFormComponent } from './forms/ak-form/ak-form.component';
import { AkFormElementsComponent } from './forms/ak-form-elements/ak-form-elements.component';
import { AkTextComponent } from './forms/ak-form-elements/ak-text/ak-text.component';
import { AkDateComponent } from './forms/ak-form-elements/ak-date/ak-date.component';
import { AkSelectComponent } from './forms/ak-form-elements/ak-select/ak-select.component';
import { AkSearchComponent } from './forms/ak-form-elements/ak-search/ak-search.component';
import { AkTextareaComponent } from './forms/ak-form-elements/ak-textarea/ak-textarea.component';
import { AkPasswordComponent } from './forms/ak-form-elements/ak-password/ak-password.component';
import { AkErrorComponent } from './ak-error/ak-error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './dialog/form-dialog/form-dialog.component';


@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent, ContactComponent, AkTitleComponent, AkBodyComponent, AkFormComponent, AkFormElementsComponent, AkTextComponent, AkDateComponent, AkSelectComponent, AkSearchComponent, AkTextareaComponent, AkPasswordComponent, AkErrorComponent, ConfirmDialogComponent, FormDialogComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ContactComponent, AkTitleComponent, AkBodyComponent, AkFormComponent, AkFormElementsComponent, AkTextComponent, AkDateComponent, AkSelectComponent, AkSearchComponent, AkTextareaComponent, AkPasswordComponent, AkErrorComponent
  ]
})
export class SharedModule { }
