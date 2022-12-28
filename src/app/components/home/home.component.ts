import { teachers, teachersList } from './../../core/teachers-list';
import { brand, brandList } from './../../core/partner-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  brandList:brand[]
  teacherList:teachers[]
  constructor() {
    this.brandList = brandList;
    this.teacherList = teachersList
   }

  ngOnInit(): void {
  }

}
