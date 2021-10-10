import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeName;
  employeeId;
  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.employeeName = this.data.employee.name;
    this.employeeId = this.data.employee.id;
  }
  delete() {
    this.employeeService.delete(this.employeeId).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
