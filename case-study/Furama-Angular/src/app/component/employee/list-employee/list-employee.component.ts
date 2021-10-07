import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../modules/Employee";
import {Position} from '../../../../modules/Position';
import {Divition} from '../../../../modules/Divition';
import {Education} from '../../../../modules/Education';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {


  employees: Employee[];
  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getAll();
  }

  ngOnInit(): void {
  }

}
