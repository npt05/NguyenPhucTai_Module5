import {Divition} from './Divition';
import {Education} from './Education';
import {Position} from './Position';

export class Employee{
  employeeId: number;
  employeeName: String;
  employeeIdCard: String;
  employeeEmail: String;
  employeePhone: String;
  employeeSalary: Number;
  employeeBirthday: String;
  employeeAddress: String;
  employeePosition: Position;
  employeeDivition: Divition;
  employeeEducation: Education;


  constructor(employeeId: number, employeeName: String, employeeIdCard: String, employeeEmail: String, employeePhone: String, employeeSalary: Number, employeeBirthday: String, employeeAddress: String, employeePosition: Position, employeeDivition: Divition, employeeEducation: Education) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.employeeIdCard = employeeIdCard;
    this.employeeEmail = employeeEmail;
    this.employeePhone = employeePhone;
    this.employeeSalary = employeeSalary;
    this.employeeBirthday = employeeBirthday;
    this.employeeAddress = employeeAddress;
    this.employeePosition = employeePosition;
    this.employeeDivition = employeeDivition;
    this.employeeEducation = employeeEducation;
  }
}
