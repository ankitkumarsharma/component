import { FormGroup } from '@angular/forms';
import { CONTACT_HEADER } from './core/reusable-forms.constant';
import { Component, OnInit } from '@angular/core';
import { LOGIN_FORM, LOGIN_FORM2 } from './core/form.config';

@Component({
  selector: 'app-reusable-forms',
  templateUrl: './reusable-forms.component.html',
  styleUrls: ['./reusable-forms.component.scss']
})
export class ReusableFormsComponent implements OnInit {
  contactData = CONTACT_HEADER;
  formConfig = LOGIN_FORM;
  formConfig2 = LOGIN_FORM2;
  formData!: any;
  formGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onReceiveFormGroup(e:any){
    this.formData = e;
  }
  onReceiveFormGroup2(e:any){
    this.formGroup = e;
  }
  onSubmit(){
    console.log(this.formData.value)
  }
  onSubmitForm(){
    console.log(this.formGroup)
    this.formGroup.patchValue({
      password: "123456",
      user: "ankit"
    });
    console.log(this.formGroup.value)
  }
}
