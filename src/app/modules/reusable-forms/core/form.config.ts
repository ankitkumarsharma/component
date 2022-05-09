import { Validators } from '@angular/forms';
import { AkFormModel } from './../../../shared/forms/ak-form/core/ak-form.types';
export const LOGIN_FORM: AkFormModel = {
  name: "Login Form",
  groups: [
    {
      columns: 3,
      groupName: 'Login Details',
      controls: [
        {
          labelName: "User Name",
          controlName: "user",
          type: "text",
          validator: []
        },
        {
          labelName: "User Password",
          controlName: "password",
          type: "password",
          validator: []
        }
      ]
    }
  ]
}
export const LOGIN_FORM2: AkFormModel = {
  name: "Auto filled Login Form",
  groups: [
    {
      columns: 3,
      groupName: 'Auto filled Login Form',
      controls: [
        {
          labelName: "Name",
          controlName: "user",
          type: "text",
          validator: []
        },
        {
          labelName: "Password",
          controlName: "password",
          type: "password",
          validator: []
        }
      ]
    }
  ]
}
export const CUSTOMER_FORM: AkFormModel = {
  name: "Customer Form",
  groups: [
    {
      columns: 3,
      groupName: 'Personal Information',
      controls: [
        {
          labelName: "Name",
          controlName: "user",
          type: "text",
          validator: []
        },
        {
          labelName: "Email Id",
          controlName: "email",
          type: "text",
          validator: []
        },
        {
          labelName: "Gender",
          controlName: "gender",
          type: "select", 
          validator: [],
          dropdownData: [
            {name:'Select', value:''},
            {name:'Male', value:'M'},
            {name:'Female', value:'F'},
            {name:'Other', value:'O'},
          ]
        },
        {
          labelName: "Country",
          controlName: "country",
          type: "select", 
          validator: [],
          dropdownData: [
            {name:'Select', value:''},
            {name:'India', value:'IN'},
            {name:'Other', value:'OT'}, 
          ]
        },
        {
          labelName: "Country Name",
          controlName: "country_other",
          type: "text",
          validator: []
        },

      ]
    }
  ]
}