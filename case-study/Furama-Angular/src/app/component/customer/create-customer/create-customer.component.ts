import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../../../model/customer/CustomerType';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[];
  customerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private router: Router) { }
  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern('^KH-\\d{4}$')]],
      name: ['',Validators.required],
      birthday: ['',Validators.required],
      customerType: ['',Validators.required],
      idCard:  ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})\\b')]],
      email:  ['', [Validators.required, Validators.email]],
      address: ['',Validators.required]
    });
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  onSubmit() {
    if (this.customerFormGroup.valid) {
      const customer = this.customerFormGroup.value;
      this.customerService.save(customer).subscribe(() => {
        this.customerFormGroup.reset();
        this.router.navigateByUrl("/customer");
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }
  }
}
