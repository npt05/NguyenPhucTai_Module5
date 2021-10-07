import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../../model/customer/CustomerType';
import {Customer} from '../../../model/customer/Customer';

const API_URL = 'http://localhost:3000/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL);
  }

  save(customerType): Observable<CustomerType> {
    return this.http.post<CustomerType>(API_URL, customerType);
  }

  findById(id: number) {
    return this.http.get<CustomerType>(`${API_URL}/${id}`);
  }

  update(id: number, customerType: CustomerType): Observable<CustomerType> {
    return this.http.put<CustomerType>(`${API_URL}/${id}`, customerType);
  }

  delete(id: number): Observable<CustomerType> {
    return this.http.delete<Customer>(`${API_URL}/${id}`);
  }
}
