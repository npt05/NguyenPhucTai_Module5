import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../../../model/service/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private API_URL = 'http://localhost:3000/service';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Service[] | any> {
    return this.http.get(this.API_URL);
  }

  save(service): Observable<Service | any> {
    return this.http.post(this.API_URL, service);
  }

  findById(id: number): Observable<Service | any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  update(id: number, service: Service): Observable<Service | any> {
    return this.http.put(`${this.API_URL}/${id}`, service);
  }

  delete(id: number): Observable<Service | any> {
    return this.http.delete(this.API_URL + '/' + id);
  }

}
