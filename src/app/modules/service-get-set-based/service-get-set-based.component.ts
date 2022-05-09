import { Component, OnInit } from '@angular/core';
import { CONTACT_HEADER } from './core/service-get-set-based.constant';

@Component({
  selector: 'app-service-get-set-based',
  templateUrl: './service-get-set-based.component.html',
  styleUrls: ['./service-get-set-based.component.scss']
})
export class ServiceGetSetBasedComponent implements OnInit {
  contactData = CONTACT_HEADER;
  constructor() { }

  ngOnInit(): void {
  }

}
