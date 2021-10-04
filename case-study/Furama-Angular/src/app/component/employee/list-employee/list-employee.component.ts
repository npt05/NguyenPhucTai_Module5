import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../modules/Employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [
    {employeeName: "Hoàng Quang", employeeIdCard: "123456789", employeeEmail: "quanghoang@gmail.com", employeeAdress: "Đà Nẵng",
    employeePhone: "0909162847", employeeSalary: 250000, employeePosition: "Phục vụ", employeeDivition: "Sale-Marketing",
    employeeEducation: "Đại học"},
    {employeeName: "Liên Giang", employeeIdCard: "028483749", employeeEmail: "gianglien@gmail.com", employeeAdress: "Đà Nẵng",
      employeePhone: "0910372844", employeeSalary: 320000, employeePosition: "Quản lý", employeeDivition: "Hành Chính",
      employeeEducation: "Đại học"},
    {employeeName: "Mỹ Tú", employeeIdCard: "937038344", employeeEmail: "tumy@gmail.com", employeeAdress: "Bình Dương",
      employeePhone: "0919967817", employeeSalary: 243000, employeePosition: "Chuyên viên", employeeDivition: "Sale-Marketing",
      employeeEducation: "Đại học"},
    {employeeName: "Võ Tuấn", employeeIdCard: "102382947", employeeEmail: "tuanvo@gmail.com", employeeAdress: "Huế",
      employeePhone: "0903092492", employeeSalary: 170000, employeePosition: "Phục vụ", employeeDivition: "Phục vụ",
      employeeEducation: "Trung cấp"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
