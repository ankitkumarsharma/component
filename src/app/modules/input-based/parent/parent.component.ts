import { Component, OnInit } from '@angular/core';
import { PARENT_DATA_LIST } from '../core/input-based.constant';
import { ParentDataList } from '../core/input-based.types';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public dataList: ParentDataList[] = PARENT_DATA_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
