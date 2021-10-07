import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../model/employee/Employee";

import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {


  employees: Employee[];
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }


}
