import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {CustomerType} from '../../../../modules/CustomerType';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerType: CustomerTypeService,
              private customerSevice: CustomerService,
              private router: Router) { }
  customerTypeList = this.customerType.getAll();
  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      customerCode: ['', [Validators.required, Validators.pattern('^KH-\\d{4}$')]],
      customerName: ['',Validators.required],
      customerBirthday: ['',Validators.required],
      customerType: ['',Validators.required],
      customerGender: ['',Validators.required],
      customerIdCard:  ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      customerPhone: ['', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]],
      customerEmail:  ['', [Validators.required, Validators.email]],
      customerAdress: ['',Validators.required]
    });
  }

  onSubmit() {
    console.log(this.customerFormGroup.value);
    if(this.customerFormGroup.valid){
      this.customerSevice.createCustomer(this.customerFormGroup.value);
      this.router.navigateByUrl("/customer");
    }
  }
}
