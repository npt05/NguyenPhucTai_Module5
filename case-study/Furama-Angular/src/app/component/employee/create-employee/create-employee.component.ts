import { Component, OnInit } from '@angular/core';
import {PositionService} from '../../../service/employee/position.service';
import {DivitionService} from '../../../service/employee/divition.service';
import {EducationService} from '../../../service/employee/education.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private positionService: PositionService,
              private divitionService: DivitionService,
              private educationService: EducationService,
              private employeeService: EmployeeService,
              private router: Router) {}
  positions = this.positionService.getAll();
  divitions = this.divitionService.getAll();
  educations = this.educationService.getAll();

  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.group({
      employeeName: ['',Validators.required],
      employeePosition: ['',Validators.required],
      employeeDivition: ['',Validators.required],
      employeeEducation: ['',Validators.required],
      employeeBirthday: ['',Validators.required],
      employeeSalary: ['',[Validators.required], Validators.min(0)],
      employeeIdCard:  ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      employeePhone: ['', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]],
      employeeEmail:  ['', [Validators.required, Validators.email]],
      employeeAddress: ['',Validators.required]
    });
  }

  onSubmit() {
    if(this.employeeFormGroup.valid){
      this.employeeService.createEmployee(this.employeeFormGroup.value);
      this.router.navigateByUrl("/employee");
    }
  }
}
