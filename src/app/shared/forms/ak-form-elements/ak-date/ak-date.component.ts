import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ak-date',
  templateUrl: './ak-date.component.html',
  styleUrls: ['./ak-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AkDateComponent),
      multi: true
    }
  ]
})
export class AkDateComponent implements OnInit,ControlValueAccessor {
  onChange: any = () => { };
  onTouch: any = () => { };
  input: any;
  @Input() labelName!: string;
  control!: FormControl;
  @Input() errorMessage!: string;
  error: boolean = false;
  focusinState = false;
  focusoutState = false;
  @Output() touchState = new EventEmitter();
  @Output() stateChange = new EventEmitter<string>();
  @Input() readonly: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (this.errorMessage) {
      this.error = true;
    }
  }

  writeValue(input: string) {
    this.input = input;
    this.control = new FormControl(this.input, []);
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
      this.touchState.emit();
    }
  }
  getLabelName() {
    if (this.labelName)
      return `${this.labelName}:`;
    else
      return '';
  }

}
