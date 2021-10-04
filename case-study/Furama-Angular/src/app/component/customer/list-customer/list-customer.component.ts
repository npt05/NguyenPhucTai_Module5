import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../../modules/Customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [
    {customerCode: "KH-0001", customername: "Hoàng Long", customerGender: "Nam", customerEmail: "longhoang@gmail.com",
      customerPhone: "09048938744",  customerIdCard: "048398274", customerAdress: "Quảng Bình", customerBirthday: "06/12/2001",
    customerType: "Diamond"},
    {customerCode: "KH-0002", customername: "Diệu Chi", customerGender: "Nữ", customerEmail: "chidieu@gmail.com",
      customerPhone: "09148948741",  customerIdCard: "043394224", customerAdress: "Hà Nội", customerBirthday: "12/08/2001",
      customerType: "Gold"},
    {customerCode: "KH-0003", customername: "Phương Linh", customerGender: "Nữ", customerEmail: "linhphuong@gmail.com",
      customerPhone: "09048103788",  customerIdCard: "059528478", customerAdress: "Quảng Bình", customerBirthday: "15/10/2001",
      customerType: "Silver"},
    {customerCode: "KH-0004", customername: "Hải Đăng", customerGender: "Nam", customerEmail: "haidang@gmail.com",
      customerPhone: "09148638965",  customerIdCard: "483396277", customerAdress: "Quảng Bình", customerBirthday: "09/11/2001",
      customerType: "Member"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
