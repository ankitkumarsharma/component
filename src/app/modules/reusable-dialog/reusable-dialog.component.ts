import { CONTACT_HEADER, OPEN_DIALOG_ONE_DATA, OPEN_DIALOG_TWO_DATA, LOGIN_FORM, USER_INFO } from './core/reusable-dialog.constant';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/dialog/confirm-dialog/confirm-dialog.component';
import { FormDialogComponent } from 'src/app/shared/dialog/form-dialog/form-dialog.component';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.scss']
})
export class ReusableDialogComponent implements OnInit {
  contactData = CONTACT_HEADER;
  openDialogOneData = OPEN_DIALOG_ONE_DATA;
  openDialogTwoData = OPEN_DIALOG_TWO_DATA;
  openFormDialogOneData = LOGIN_FORM;
  openFormDialogTwoData = USER_INFO;
  dialogOneData:any;
  dialogTwoData:any;
  dialogFormOneData:any;
  dialogFormTwoData:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogOne() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: this.openDialogOneData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        this.onSubmitDialogOne();
      }
    });
  }
  openDialogTwo() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: this.openDialogTwoData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        this.onSubmitDialogTwo();
      }
    });
  }
  openFormDialogOne() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '400px',
      data: this.openFormDialogOneData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onSubmitLoginForm(result)
    });
  }
  openFormDialogTwo() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '400px',
      data: this.openFormDialogTwoData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onSubmitUserForm(result)
    });
  }
  onSubmitDialogOne(){
    this.dialogOneData = "On Submit Message Done";
  }
  onSubmitDialogTwo(){
    this.dialogTwoData = "Thanks, your form successfully submitted!!!";
  }
  onSubmitLoginForm(data:any){
    this.dialogFormOneData = data?.value;
  }
  onSubmitUserForm(data:any){
    this.dialogFormTwoData = data?.value;

  }
}
