import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RenType} from '../../../../model/service/RenType';
import {ServiceType} from '../../../../model/service/ServiceType';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RenTypeService} from '../../../service/service/ren-type.service';
import {ServiceTypeService} from '../../../service/service/service-type.service';
import {ServiceService} from '../../../service/service/service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  renTypes: RenType[];
  serviceTypes: ServiceType[];
  serviceFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private renTypeService: RenTypeService,
              private serviceTypeService: ServiceTypeService,
              private serviceService: ServiceService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.serviceFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern('^DV-\\d{4}$')]],
      maxPeople: ['', [Validators.required, Validators.min(1)]],
      description: ['',Validators.required],
      standardRoom: ['', Validators.required],
      numberOfFloors: ['',[Validators.required, Validators.min(1)]],
      area: ['', [Validators.required, Validators.min(1)]],
      rentType: ['', Validators.required],
      serviceType: ['', Validators.required],
      poolArea: ['',[Validators.required, Validators.min(1)]],
      cost: ['',[Validators.required, Validators.min(1)]]
    });
    this.getAll();
  }

  getAll() {
    this.renTypeService.getAll().subscribe(renType => {
      this.renTypes = renType;
    });
    this.serviceTypeService.getAll().subscribe(serviceType =>{
      this.serviceTypes= serviceType;
    })
  }

  onSubmit() {
    if (this.serviceFormGroup.valid) {
      const service = this.serviceFormGroup.value;
      this.serviceService.save(service).subscribe(() => {
        this.snackBar.open("New service created.", "Close", {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'blue-snackbar'
        } )
        this.serviceFormGroup.reset();
        this.router.navigateByUrl("/service");
      }, e => {
        console.log(e);
      });
    }
  }
}
