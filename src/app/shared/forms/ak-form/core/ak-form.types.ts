export interface AkFormControlModel {
  controlName: string,
  validator: Array<any>,
  labelName: string,
  type: 'text' | 'date' | 'select' | 'search' | 'textarea' | 'password'
  dropdownData?: Array<DropDownModel>,
  defaultValue?: any,
  config?: any,
  readOnly?: any;
}
export interface DropDownModel {
  name: string,
  value: string
}
export interface AkFormGroupModel {
  groupName: string,
  controls?: Array<AkFormControlModel>,
  type?: 'divider' | 'grey' | 'underline' | string,
  columns?: 1 | 2 | 3 | 4 | 6 | 12
}
export interface AkFormModel {
  name?: string,
  groups?: Array<AkFormGroupModel>
}
export interface StateChangedModel {
  controlName: string,
  state: string
}
