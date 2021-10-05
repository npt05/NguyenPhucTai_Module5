import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function comparePassword(check: AbstractControl) {
  const value = check.value;
  return (value.password === value.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponentComponent implements OnInit {
  countryList: string[] = ['Hà Nội', 'Huế', 'Đà Nẵng', 'Sài Gòn', 'Cần Thơ',
    'Hải Phòng', 'Bình Dương' , 'Thanh Hoá', 'Nghệ An', 'Vĩnh Phúc', 'Cà Mau', 'Quảng Nam', 'Quảng Ngãi'];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validators: comparePassword}),
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]]
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
