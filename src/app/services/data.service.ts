import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isEnable: boolean = false;
  constructor() { }
  // we are communication data between two component via service -- getter/setter method
  //-----------------------------------------------------------

  // setter method
  setData(data:any){
    this.isEnable = data;
  }
  // getter method
  getData(){
    return this.isEnable;
  }
}
