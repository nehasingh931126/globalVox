import { Component } from '@angular/core';

export interface IDetailList {
  firstname: string;
  confirmpassword: string;
  dob: Date;
  gender: string;
  lastname: string;
  password: string;
  position:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  defaultFormList: IDetailList[]  = [
    {position: 1, firstname:"neha", lastname:"singh", dob: new Date(), password:"abc", confirmpassword:"abc",gender:'Male' },
    {position: 2, firstname:"neha", lastname:"singh", dob: new Date(), password:"abc", confirmpassword:"abc", gender:'Female'},
    {position: 3, firstname:"neha", lastname:"singh",dob: new Date(), password:"abc", confirmpassword:"abc", gender:'Other'}
  ];

  constructor() {
    localStorage.setItem('listData', JSON.stringify(this.defaultFormList));
  }
}
