import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../../../model/service/Service';
import {ServiceType} from '../../../model/service/ServiceType';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  private API_URL = 'http://localhost:3000/serviceType';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ServiceType[] | any> {
    return this.http.get(this.API_URL);
  }

  save(serviceType): Observable<ServiceType | any> {
    return this.http.post(this.API_URL, serviceType);
  }

  findById(id: number): Observable<ServiceType | any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  update(id: number, serviceType: ServiceType): Observable<ServiceType | any> {
    return this.http.put(`${this.API_URL}/${id}`, serviceType);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API_URL + '/' + id);
  }
}
