import {Injectable} from '@angular/core';
import {Customer} from '../../../model/customer/Customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[] | any> {
    return this.http.get(this.API_URL);
  }

  save(customer): Observable<Customer | any> {
    return this.http.post(this.API_URL, customer);
  }

  // findById(id: number) {
  //   return this.http.get<Customer>(`${this.API_URL}/${id}`);
  // }
  //
  // update(id: number, customer: Customer): Observable<Customer> {
  //   return this.http.put<Customer>(`${this.API_URL}/${id}`, customer);
  // }
  //
  // delete(id: number): Observable<Customer> {
  //   return this.http.delete<Customer>(`${this.API_URL}/${id}`);
  // }
  //
  // search(name: string, name2: string, birthday: Date, birthday2: Date): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.API_URL + '?name_like=' + name + '&customerType.name_like=' + name2 + '&birthday_start' + birthday + '&_end' + birthday2);
  // }

}
