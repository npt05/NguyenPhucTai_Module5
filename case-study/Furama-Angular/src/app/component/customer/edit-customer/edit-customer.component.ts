import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerType} from '../../../../model/customer/CustomerType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  customerTypes: CustomerType[];

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.editForm = this.formBuilder.group({
        id: [],
        code: ['', [Validators.required, Validators.pattern('^KH-\\d{4}$')]],
        name: ['', Validators.required],
        birthday: ['', Validators.required],
        customerType: ['', Validators.required],
        idCard: ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
        phone: ['', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required]
      });
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }


  update(id: number) {

    if (this.editForm.valid) {
      const customer = this.editForm.value;
      this.customerService.update(id, customer).subscribe(() => {
        this.router.navigate(['/customer/list']);
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      });
    }
  }
}
