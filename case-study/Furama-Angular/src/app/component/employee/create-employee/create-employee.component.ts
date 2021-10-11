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
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeFormGroup: FormGroup;
  positions: Position[];
  educations: Education[];
  divisions: Division[];
  constructor(private formBuilder: FormBuilder,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private employeeService: EmployeeService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.group({
      name: ['',Validators.required],
      position: ['',Validators.required],
      division: ['',Validators.required],
      education: ['',Validators.required],
      birthday: ['',Validators.required],
      salary: ['',[Validators.required, Validators.min(0)]],
      idCard:  ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})\\b')]],
      email:  ['', [Validators.required, Validators.email]],
      address: ['',Validators.required]
    });
    this.getAll();
  }

  getAll() {
    this.divisionService.getAll().subscribe(division => {
      this.divisions = division;
    });
    this.positionService.getAll().subscribe(position => {
      this.positions = position;
    });
    this.educationService.getAll().subscribe(education => {
      this.educations = education;
    });
  }

  onSubmit() {
    if (this.employeeFormGroup.valid) {
      const employee = this.employeeFormGroup.value;
      this.employeeService.save(employee).subscribe(() => {
        this.snackBar.open("New customer created.", "Close", {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'blue-snackbar'
        } )
        this.employeeFormGroup.reset();
        this.router.navigateByUrl("/employee");
      }, e => {
        console.log(e);
      });
    }
  }
}
