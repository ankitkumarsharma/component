import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OPERATION } from '../core/output-based.constant';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public inputValue1: any = 0;
  public inputValue2: any = 0;
  public result: any = '0';
  public optSymbal:any;
  constructor() {

  }
  text2Data(value: any) {
    this.inputValue2 = Number(value);
  }
  text1Data(value: any) {
    this.inputValue1 = Number(value);
  }
  ngOnInit(): void {

  }
  operationClick($event: any) {
    this.optSymbal = $event;
    switch ($event) {
      case OPERATION.addition:
        this.result = this.inputValue1 + this.inputValue2;
        break;
      case OPERATION.subtract:
        this.result = this.inputValue1 - this.inputValue2;
        break;
      case OPERATION.multiply:
        this.result = this.inputValue1 * this.inputValue2;
        break;
      case OPERATION.division:
        this.result = this.inputValue1 / this.inputValue2;
        break;
      default:
        break;
    }
  }

}
