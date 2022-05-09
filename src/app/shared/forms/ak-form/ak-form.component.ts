import { AkFormModel, StateChangedModel, AkFormControlModel } from './core/ak-form.types';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ak-form',
  templateUrl: './ak-form.component.html',
  styleUrls: ['./ak-form.component.scss']
})
export class AkFormComponent implements OnInit, AfterViewChecked {
  @Input() formConfig!: AkFormModel;
  @Output() formGroupReceiever: EventEmitter<FormGroup> = new EventEmitter();
  @Output() stateChange: EventEmitter<StateChangedModel> = new EventEmitter();
  formGroup!: FormGroup;
  constructor(private _fb: FormBuilder, private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({});
    this.formConfig.groups?.forEach((group)=>{
      if(group.controls){
        group.controls.forEach((control)=>{
          this.addControlToFormGroup(control);
        })
      }
    })
    this.formGroupReceiever.emit(this.formGroup);
  }
  addControlToFormGroup(control: AkFormControlModel){
    this.formGroup.addControl(
      control.controlName,
      this._fb.control(
        this.getDefaultValueFromControl(control),
        control.validator
      )
    );
  }
  getDefaultValueFromControl(control: AkFormControlModel): string {
    if(control.defaultValue) {
      if(control.type === 'date' && control.defaultValue === 'today') {
        return ""; // we can use any today date function also
      } else {
        return control.defaultValue;
      }
    } else {
      return "";
    }
  }
  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }
  getFormControlErrorMessage(control: AkFormControlModel) {
    return "";
    // if(control.type !== '' && this.formGroup.get(control.controlName)?.errors &&
    // this.formGroup.get(control.controlName)?.errors) {
    //   if(this.formGroup.get(control.controlName)?.errors['required']) {
    //     return `Please enter required field`;
    //   } else if(this.formGroup.get(control.controlName)?.errors['error']){
    //     return this.formGroup.get(control.controlName)?.errors['error']
    //   }
    //   return `Please enter valid ${control.labelName} value`;
    // } else {
    //   return "";
    // }
  }

  getBootstrapColumnWidth(columns:any){
    if(columns){
      return 12/ columns;
    } else {
      return 4;
    }
  }
  getWidthForControl(type:any, config: AkFormControlModel){
    config.type ? 'col-9': 'col-12';
  }
  onStateChange(state: string, controlName: string){
    this.stateChange.emit({state, controlName});
  }
  isRequiredField(control: AkFormControlModel){
    return control.validator?.includes(Validators.required);
  }
}
