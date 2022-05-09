import { AkFormModel } from "src/app/shared/forms/ak-form/core/ak-form.types"
import { openDialogOneTypes } from "./reusable-dialog.types"

export const CONTACT_HEADER = {
  title: 'Angular Reusable Dialog',
  subTitle: 'We can reuse one single dialog via config file in multiple parameters'
}
export const OPEN_DIALOG_ONE_DATA:openDialogOneTypes = {
  title: 'Message Submit',
  desc: 'Please press submit for submit the message.'
}
export const OPEN_DIALOG_TWO_DATA:openDialogOneTypes = {
  title: 'Form Submit',
  desc: 'Can you please submit this form by press submit.'
}
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
export const USER_INFO: AkFormModel = {
  name: "User Info",
  groups: [
    {
      columns: 2,
      groupName: 'User Info',
      controls: [
        {
          labelName: "User Name",
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
          labelName: "Address",
          controlName: "address",
          type: "text",
          validator: []
        },
        {
          labelName: "Mobile No",
          controlName: "mobile",
          type: "text",
          validator: []
        }
      ]
    }
  ]
}
