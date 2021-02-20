import { Component, OnInit } from '@angular/core';

export interface IDetailList {
  firstname: string;
  confirmpassword: string;
  dob: Date;
  gender: string;
  lastname: string;
  password: string;
}

const ELEMENT_DATA = [];

@Component({
  selector: 'app-listing-section',
  templateUrl: './listing-section.component.html',
  styleUrls: ['./listing-section.component.css']
})
export class ListingSectionComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'dob', 'gender', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource =  JSON.parse(localStorage.getItem('listData'));
  }

  onDelete(index: number) {
    const listData = JSON.parse(localStorage.getItem('listData'));
    listData.splice(index-1, 1);
    localStorage.setItem('listData', JSON.stringify(listData));
    this.dataSource = listData;
  }
}
