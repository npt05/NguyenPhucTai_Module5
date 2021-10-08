import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../../model/employee/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[] | any> {
    return this.http.get(this.API_URL);
  }

  save(employee): Observable<Employee | any> {
    return this.http.post(this.API_URL, employee);
  }

  findById(id: number):Observable<Employee | any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  update(id: number, employee: Employee): Observable<Employee | any> {
    return this.http.put(`${this.API_URL}/${id}`, employee);
  }

  delete(id: number): Observable<Employee | any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  search(name: string): Observable<Employee[] | any> {
    return this.http.get(this.API_URL + '?name_like=' + name);
  }
}
