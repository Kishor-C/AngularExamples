import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  message = "This is Employee Component"
  employee = new Employee(1000, "Alex", 35000);
  basicDate = new Date(1999, 10, 20); // 10 means November
  constructor() { }

  ngOnInit() {
  }

}
