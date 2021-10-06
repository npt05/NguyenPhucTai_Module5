import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../modules/Customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerType} from '../../../../modules/CustomerType';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../../service/customer-type/customer-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editForm: FormGroup;
  id: String;
  customerTypes: CustomerType[];
  customerUpdate: Customer;

  customerEdit: Customer;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.formInit();
    this.setCustomer();
  }

  formInit() {
    this.editForm = this.formBuilder.group({
      customerId: [],
      customerCode: ['', [Validators.required, Validators.pattern('^KH-\\d{4}$')]],
      customerName: ['', Validators.required],
      customerBirthday: ['', Validators.required],
      customerType: ['', Validators.required],
      customerGender: ['', Validators.required],
      customerIdCard: ['', [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]],
      customerPhone: ['', [Validators.required, Validators.pattern('^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$')]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerAdress: ['', Validators.required]
    });
  }

  setCustomer() {
      this.editForm.patchValue(this.customerService.findById(this.id));
  }

  update(id: String) {
    if(this.editForm.valid){
      this.customerUpdate = this.editForm.value;
      this.customerService.findById(id).customerCode = this.customerUpdate.customerCode;
      this.customerService.findById(id).customerName = this.customerUpdate.customerName;
      this.customerService.findById(id).customerBirthday = this.customerUpdate.customerBirthday;
      this.customerService.findById(id).customerType = this.customerUpdate.customerType;
      this.customerService.findById(id).customerGender = this.customerUpdate.customerGender;
      this.customerService.findById(id).customerIdCard = this.customerUpdate.customerIdCard;
      this.customerService.findById(id).customerPhone = this.customerUpdate.customerPhone;
      this.customerService.findById(id).customerEmail = this.customerUpdate.customerEmail;
      this.customerService.findById(id).customerAdress = this.customerUpdate.customerAdress;
      this.router.navigateByUrl("/customer");
    }
  }
  getAllCustomerType(){
    this.customerTypes = this.customerTypeService.getAll();
  }
}
