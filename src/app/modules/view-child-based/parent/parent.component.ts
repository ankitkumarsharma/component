import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;
  // second way for id type element
  @ViewChild('text1') text1!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addList(){
    this.child.arrList.push(
      {
        id: 1,
        userId: 123,
        title: 'ankit',
        body:'every thing mcm complrter'
      }
    );
  }
  ngAfterViewInit(){
    this.child.showList(true);
    // second way for id type element
    this.text1.nativeElement.value = 'ankit';
    this.text1.nativeElement.title = 'ankit title';
  }
}
