import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
firstName: string ='';
lastName: string ='';
gender: string ='';
age: string ='';
showDetails = false;

getfullName(): string {
  return this.firstName +' '+ this.lastName;
}

  constructor() { }

  ngOnInit() {
  }

  Btn_OnClick()
  {
    this.firstName ='';
  }

  toggleDetails(): void
  {
    this.showDetails = ! this.showDetails;
  }  
  
}
