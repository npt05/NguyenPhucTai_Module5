import { Injectable } from '@angular/core';
import {Employee} from '../../../modules/Employee';
import {PositionService} from './position.service';
import {DivitionService} from './divition.service';
import {EducationService} from './education.service';
import {Divition} from '../../../modules/Divition';
import {Education} from '../../../modules/Education';
import {Position} from '../../../modules/Position';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];
  positions: Position[];
  divitions: Divition[];
  educations: Education[];

  constructor(private positionSevice: PositionService,
              private divitionService: DivitionService,
              private educationService: EducationService) {
    this.positions = this.positionSevice.getAll();
    this.divitions = this.divitionService.getAll();
    this.educations = this.educationService.getAll();
    this.employees = [
      {employeeId:1, employeeName: 'Hải Yến', employeeIdCard: '139384937', employeeEmail: 'haiyen@gmail.com',
        employeePhone: '0918379274', employeeSalary: 1230345, employeeBirthday: '2021-12-09',
      employeeAddress: 'Đà Nẵng', employeePosition: this.positions[0],employeeDivition: this.divitions[1],
        employeeEducation: this.educations[2]
      },
      {employeeId:2, employeeName: 'Phương Linh', employeeIdCard: '34694679', employeeEmail: 'linhphuong@gmail.com',
        employeePhone: '0916745367', employeeSalary: 3240376,  employeeBirthday: '2021-05-10',
        employeeAddress: 'Đà Nẵng', employeePosition: this.positions[4],employeeDivition: this.divitions[0],
        employeeEducation: this.educations[2]
      },
      {employeeId:3, employeeName: 'Hải Đăng', employeeIdCard: '35793584', employeeEmail: 'haidang@gmail.com',
        employeePhone: '0905692563', employeeSalary: 5530345,  employeeBirthday: '2021-08-21',
        employeeAddress: 'Đà Nẵng', employeePosition: this.positions[5],employeeDivition: this.divitions[1],
        employeeEducation: this.educations[3]
      }
    ];
  }

  getAll(){
    return this.employees;
  }

  createEmployee(employee: Employee){
    this.employees.push(employee);
  }
}
