import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  a : number = 10;
  b : number = 20;
  c : number = 30;
  z : boolean = false;
  names : string[] = ["Sachin", "Sourav", "Dhoni"];
  employeeList : Employee[] = [
    new Employee(100, "Alex", 40000),
    new Employee(200, "Bravo", 42000),
    new Employee(300, "Charles", 20000)
  ];
  constructor() { }

  ngOnInit() {
  }

}
