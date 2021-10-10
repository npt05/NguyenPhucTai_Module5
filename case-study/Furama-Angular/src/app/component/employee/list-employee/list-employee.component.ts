import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../model/employee/Employee";

import {EmployeeService} from '../../../service/employee/employee.service';
import {DeleteCustomerComponent} from '../../customer/delete-customer/delete-customer.component';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {


  employees: Employee[];
  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
  }
  ngOnInit(){
    this.getAll();
  }
  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }

  deleteDialog(id: any): void {
    this.employeeService.findById(id).subscribe(dataEmployee => {

      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '500px',
        data: {employee: dataEmployee},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
