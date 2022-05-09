import { Component, OnInit } from '@angular/core';
import { CONTACT_HEADER } from './core/output-based.constant';

@Component({
  selector: 'app-output-based',
  templateUrl: './output-based.component.html',
  styleUrls: ['./output-based.component.scss']
})
export class OutputBasedComponent implements OnInit {
  contactData = CONTACT_HEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
