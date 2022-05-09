import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ak-error',
  templateUrl: './ak-error.component.html',
  styleUrls: ['./ak-error.component.scss']
})
export class AkErrorComponent implements OnInit {
  @Input() displayError!: boolean;
  @Input() errorMessage!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
