import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:[`
  //h3 {
  //  color:dodgerblue;
  //}
  //`]
})
export class AppComponent {
  pageHeader: string = "Mathematical Summation";
  employeeHeader: string = "Employee Details";
  referenceHeader: string = "References, Speakers";
  employeeListHeader: string = "Employee List";
  resourceHeader: string = "Source Repository";
}
