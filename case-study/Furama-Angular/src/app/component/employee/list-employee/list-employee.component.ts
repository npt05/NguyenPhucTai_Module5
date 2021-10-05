import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../modules/Employee";
import {Position} from '../../../../modules/Position';
import {Divition} from '../../../../modules/Divition';
import {Education} from '../../../../modules/Education';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  position1 = new Position(1,'Lễ Tân');
  position2 = new Position(2,'Phục vụ');
  position3 = new Position(3,'Chuyên viên');
  position4 = new Position(4,'Giám sát');
  position5 = new Position(5,'Quản lý');
  position6 = new Position(6,'Giám đốc');
  positions: Position[] = [this.position1, this.position2, this.position3, this.position4, this.position5, this.position6];

  divition1 = new Divition(1, 'Sale-Marketing');
  divition2 = new Divition(2, 'Hành Chính');
  divition3 = new Divition(3, 'Phục vụ');
  divition4 = new Divition(4, 'Quản lý');
  divitions: Divition[] = [this.divition1, this.divition2, this.divition3, this.divition4];

  education1 = new Education(1, 'Trung cấp');
  education2 = new Education(2, 'Cao Đẳng');
  education3 = new Education(3, 'Đại học');
  education4 = new Education(4, 'Sau đại học');
  educations: Education[] = [this.education1, this.education2, this.education3, this.education4];

  employee1 = new Employee(1, 'Hải Yến', '139384937', 'haiyen@gmail.com',
    '0918379274', 1230345, 'Đà Nẵng', this.position3, this.divition2, this.education3);
  employee2 = new Employee(2, 'Phương Linh', '345934267', 'linhphuong@gmail.com',
    '0900389579', 1567698, 'Đà Nẵng', this.position1, this.divition1, this.education3);
  employee3 = new Employee(3, 'Diệu Chi', '258543055', 'chidieu@gmail.com',
    '0918028478', 2387656, 'Đà Nẵng', this.position4, this.divition4, this.education3);
  employee4 = new Employee(4, 'Hải Đăng', '903791738', 'haidang@gmail.com',
    '0909726395', 3334675, 'Đà Nẵng', this.position5, this.divition4, this.education3);
  employees: Employee[] = [this.employee1, this.employee2, this.employee3, this.employee4];
  constructor() { }

  ngOnInit(): void {
  }

}
