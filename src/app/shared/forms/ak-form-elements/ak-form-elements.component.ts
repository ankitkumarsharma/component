import { AkFormControlModel } from './../ak-form/core/ak-form.types';
import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ak-form-elements',
  templateUrl: './ak-form-elements.component.html',
  styleUrls: ['./ak-form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AkFormElementsComponent),
      multi: true
    }
  ]
})
export class AkFormElementsComponent implements OnInit, ControlValueAccessor {
  onChange: any = () => { };
  onTouch: any = () => { };
  @Input('value') input!: any;
  @Input() config!: AkFormControlModel;
  @Input() errorMessage!: string;
  error: boolean = false;
  focusinState = false;
  focusoutState = false;
  @Output() stateChange = new EventEmitter<string>();
  @Input() required: boolean = false;
  control!: FormControl;
  constructor() { }

  ngOnInit(): void {
    if (this.errorMessage) {
      this.error = true;
    }
  }
  set value(val: any) {
    if(val !== undefined && this.input !== val){
      this.input = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }
  writeValue(input: string) {
    this.input = input;
    this.control = new FormControl(this.input);
    this.control.valueChanges.subscribe((value)=>{
      this.onChange(value);
    })
  }
  registerOnChange(value: any): void {
    this.onChange = value;
  }
  registerOnTouched(value: any): void {
    this.onTouch = value;
  }
  updateTouchState() {
    if (this.focusinState && this.focusoutState) {
      this.onChange(this.control.value);
      this.onTouch();
    }
  }
}
