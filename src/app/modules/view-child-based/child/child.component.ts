import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DATA_LIST } from '../core/view-child-based.constant';
import { DataList } from '../core/view-child-based.types';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public collapseList: boolean = false;  // add definite assignment asseration
  public arrList:DataList[] = [];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  showList(value:any){
    this.collapseList = value;
    this.cdr.detectChanges();
  }
}
