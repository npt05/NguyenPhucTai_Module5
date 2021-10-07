import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {NavbarComponent} from './component/home/navbar/navbar.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';


const routes: Routes = [
  {path: "", component: NavbarComponent},
  {path: "customer", component: ListCustomerComponent},
  {path: "customer/create", component: CreateCustomerComponent},
  {path: "customer/edit/:id", component: EditCustomerComponent},
  {path: "employee", component: ListEmployeeComponent},
  {path: "employee/create", component: CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
