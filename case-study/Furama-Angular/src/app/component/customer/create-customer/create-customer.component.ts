import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList: String[] =['Diamond', 'Platinum', 'Gold', 'Silver', 'Member'];
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
