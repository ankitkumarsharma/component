import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BTN_OPERATION_ARR } from '../core/output-based.constant';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() btnClick:EventEmitter<any> = new EventEmitter();
  btnArr = BTN_OPERATION_ARR;
  constructor() { }

  ngOnInit(): void {
  }
  changeData(value:string){
    this.btnClick.emit(value);
  }
}
