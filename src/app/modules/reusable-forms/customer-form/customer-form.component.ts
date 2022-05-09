import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CUSTOMER_FORM } from '../core/form.config';
import { CONTACT_HEADER } from '../core/reusable-forms.constant';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  contactData = CONTACT_HEADER;
  customerForm = CUSTOMER_FORM;
  formGroup!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onReceiveFormGroup(form:FormGroup){
    this.formGroup = form;
    this.formGroup.get("user")?.valueChanges.subscribe((data)=>{
      if(data){
        this.formGroup.get("email")?.disable({
          onlySelf: true
        });
      } else {
        this.formGroup.get("email")?.enable({
          onlySelf: true
        });
      }
      this.formGroup.get("email")?.updateValueAndValidity();
    })
  }
  onSubmit(){
    console.log(this.formGroup.value)
  }
}
