import { Component, OnInit } from '@angular/core';
import {PositionService} from '../../../service/employee/position.service';
import {EducationService} from '../../../service/employee/education.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Education} from '../../../../model/employee/Education';
import {Division} from '../../../../model/employee/Division';
import {Position} from '../../../../model/employee/Position';
import {DivisionService} from '../../../service/employee/divition.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private employeeService: EmployeeService,
              private router: Router) {}
  positions: Position[];
  educations: Education[];
  divisions: Division[];
  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.group({
      name: ['',Validators.required],
      position: ['',Validators.required],
      division: ['',Validators.required],
      education: ['',Validators.required],
      birthday: ['',Validators.required],
      salary: ['',[Validators.required], Validators.min(0)],
      idCard:  ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]],
      email:  ['', [Validators.required, Validators.email]],
      address: ['',Validators.required]
    });
    this.getAll();
  }

  getAll() {
    this.divisionService.getAll().subscribe(divisions => {
      this.divisions = divisions;
    });
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
    });
    this.educationService.getAll().subscribe(educations => {
      this.educations = educations;
    });
  }

  onSubmit() {
    if (this.employeeFormGroup.valid) {
      const employee = this.employeeFormGroup.value;
      this.employeeService.save(employee).subscribe(() => {
        this.employeeFormGroup.reset();
        this.router.navigate(['/employee/list']);
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }
  }
}
