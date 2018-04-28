import { Component } from "@angular/core";        

@Component({
    selector:'app-employeeList',
    templateUrl:'./employeeList.component.html',    
    styleUrls:['./employeeList.component.css']
})

export class EmployeeListComponent{

    employees = [
        {firstName: 'Girish', lastName: 'Mate', gender:'Male', age:'29'},
        {firstName: 'Jebish', lastName: 'Kurian', gender:'Male', age:'38'},
        {firstName: 'Kalai', lastName: 'Vanan', gender:'Male', age:'28'},
        {firstName: 'Divya', lastName: 'Manish', gender:'Female', age:'30'}
        ];

        //employees = null;
    
    
}