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

  findById(id: number): Observable<Customer | any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer | any> {
    return this.http.put(`${this.API_URL}/${id}`, customer);
  }

  delete(id: number): Observable<Customer | any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${this.API_URL}?name_like=${name}`);
  }

  public search(name: string, customerTypeName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + "?name_like=" + name + "&customerType.name=" + customerTypeName);
  }

}
