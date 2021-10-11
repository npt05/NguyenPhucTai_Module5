import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';
import {BodyComponent} from './component/home/body/body.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';
import {ListServiceComponent} from './component/service/list-service/list-service.component';
import {CreateServiceComponent} from './component/service/create-service/create-service.component';
import {EditServiceComponent} from './component/service/edit-service/edit-service.component';
import {ViewServiceComponent} from './component/service/view-service/view-service.component';


const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "customer", component: ListCustomerComponent},
  {path: "customer/create", component: CreateCustomerComponent},
  {path: "customer/edit/:id", component: EditCustomerComponent},

  {path: "service", component: ListServiceComponent},
  {path: "service/create", component: CreateServiceComponent},
  {path: "service/edit/:id", component: EditServiceComponent},
  {path: "service/detail/:id", component: ViewServiceComponent},

  {path: "employee", component: ListEmployeeComponent},
  {path: "employee/create", component: CreateEmployeeComponent},
  {path: "employee/edit/:id", component: EditEmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
