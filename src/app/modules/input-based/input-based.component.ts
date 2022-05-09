import { Component, OnInit } from '@angular/core';
import { CONTACT_HEADER } from './core/input-based.constant';

@Component({
  selector: 'app-input-based',
  templateUrl: './input-based.component.html',
  styleUrls: ['./input-based.component.scss']
})
export class InputBasedComponent implements OnInit {

  contactData = CONTACT_HEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
