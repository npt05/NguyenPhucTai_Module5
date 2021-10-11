import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RenType} from '../../../model/service/RenType';

@Injectable({
  providedIn: 'root'
})
export class RenTypeService {
  private API_URL = 'http://localhost:3000/renType';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<RenType[] | any> {
    return this.http.get(this.API_URL);
  }

  save(renType): Observable<RenType | any> {
    return this.http.post(this.API_URL, renType);
  }

  findById(id: number): Observable<RenType | any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }

  update(id: number, renType: RenType): Observable<RenType | any> {
    return this.http.put(`${this.API_URL}/${id}`, renType);
  }

  delete(id: number): Observable<RenType | any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
