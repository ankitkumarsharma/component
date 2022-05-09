import { Component, OnInit } from '@angular/core';
import { CONTACT_HEADER } from './core/view-child-based.constant';

@Component({
  selector: 'app-view-child-based',
  templateUrl: './view-child-based.component.html',
  styleUrls: ['./view-child-based.component.scss']
})
export class ViewChildBasedComponent implements OnInit {
  contactData = CONTACT_HEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
