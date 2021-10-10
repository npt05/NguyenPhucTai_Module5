import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Position} from '../../../../model/employee/Position';
import {Education} from '../../../../model/employee/Education';
import {Division} from '../../../../model/employee/Division';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';
import {PositionService} from '../../../service/employee/position.service';
import {DivisionService} from '../../../service/employee/divition.service';
import {EducationService} from '../../../service/employee/education.service';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  positions: Position[];
  educations: Education[];
  divisions: Division[];

  constructor(private formBuilder: FormBuilder,
              private positionService: PositionService,
              private activatedRoute: ActivatedRoute,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private employeeService: EmployeeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getEmployee(this.id);
    });
  }

  ngOnInit(): void {
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

  private getEmployee(id: number) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.editForm = this.formBuilder.group({
        id: [employee.id],
        name: [employee.name, Validators.required],
        position: [employee.position, Validators.required],
        division: [employee.division, Validators.required],
        education: [employee.education, Validators.required],
        birthday: [employee.birthday, Validators.required],
        salary: [employee.salary, [Validators.required, Validators.min(0)]],
        idCard: [employee.idCard, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
        phone: [employee.phone, [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})\\b')]],
        email: [employee.email, [Validators.required, Validators.email]],
        address: [employee.address, Validators.required]
      });
    });
  }

  update(id: number) {
    if (this.editForm.valid) {
      const employee = this.editForm.value;
      this.employeeService.update(id, employee).subscribe(() => {
        this.router.navigateByUrl("/employee");
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      });
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
