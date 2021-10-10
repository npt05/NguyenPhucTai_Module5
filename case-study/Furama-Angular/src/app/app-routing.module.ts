import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';
import {BodyComponent} from './component/home/body/body.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';


const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "customer", component: ListCustomerComponent},
  {path: "customer/create", component: CreateCustomerComponent},
  {path: "customer/edit/:id", component: EditCustomerComponent},
  {path: "employee", component: ListEmployeeComponent},
  {path: "employee/edit/:id", component: EditEmployeeComponent},
  {path: "employee/create", component: CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
