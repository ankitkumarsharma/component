import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  show_flag:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }
  getData(){
    this.show_flag = this.dataService.getData();
  }
}
