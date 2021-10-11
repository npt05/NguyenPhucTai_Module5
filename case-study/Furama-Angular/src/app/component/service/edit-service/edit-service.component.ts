import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RenType} from '../../../../model/service/RenType';
import {ServiceType} from '../../../../model/service/ServiceType';
import {PositionService} from '../../../service/employee/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DivisionService} from '../../../service/employee/divition.service';
import {EducationService} from '../../../service/employee/education.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {RenTypeService} from '../../../service/service/ren-type.service';
import {ServiceTypeService} from '../../../service/service/service-type.service';
import {ServiceService} from '../../../service/service/service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  renTypes: RenType[];
  serviceTypes: ServiceType[];

  constructor(private formBuilder: FormBuilder,
              private rentTypeService: RenTypeService,
              private activatedRoute: ActivatedRoute,
              private serviceTypeSerivce: ServiceTypeService,
              private serviceService: ServiceService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getService(this.id);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rentTypeService.getAll().subscribe(rentType => {
      this.renTypes = rentType;
    });
    this.serviceTypeSerivce.getAll().subscribe(serviceType => {
      this.serviceTypes = serviceType;
    });

  }

  private getService(id: number) {
    return this.serviceService.findById(id).subscribe(service => {
      this.editForm = this.formBuilder.group({
        id: [service.id],
        name: [service.name, Validators.required],
        code: [service.code, [Validators.required, Validators.pattern('^DV-\\d{4}$')]],
        maxPeople: [service.maxPeople, [Validators.required, Validators.min(1)]],
        description: [service.description,Validators.required],
        standardRoom: [service.standardRoom, Validators.required],
        numberOfFloors: [service.numberOfFloors,[Validators.required, Validators.min(1)]],
        area: [service.area, [Validators.required, Validators.min(1)]],
        rentType: [service.rentType, Validators.required],
        serviceType: [service.serviceType, Validators.required],
        poolArea: [service.poolArea,[Validators.required, Validators.min(1)]],
        cost: [service.cost,[Validators.required, Validators.min(1)]]
      });
    });
  }

  update(id: number) {
    if (this.editForm.valid) {
      const service = this.editForm.value;
      this.serviceService.update(id, service).subscribe(() => {
        this.router.navigateByUrl('/service');
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
