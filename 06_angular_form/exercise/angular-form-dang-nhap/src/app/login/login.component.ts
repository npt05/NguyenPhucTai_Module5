import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  get email() {
    return this.contractForm.get('email');
  }
  get password() {
    return this.contractForm.get('password');
  }
  contractForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.contractForm)
  }
}
