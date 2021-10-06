import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {CustomerType} from '../../../../modules/CustomerType';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerType1 = new CustomerType(1, 'Diamond');
  customerType2 = new CustomerType(2, 'Platinum');
  customerType3 = new CustomerType(3, 'Gold');
  customerType4 = new CustomerType(4, 'Silver');
  customerType5 = new CustomerType(5, 'Member');
  customerTypeList: CustomerType[] = [this.customerType1, this.customerType2, this.customerType3, this.customerType4, this.customerType5];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
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
    console.log(this.formGroup.value);
  }
}
