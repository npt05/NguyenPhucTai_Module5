import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../../../model/employee/Division';



const API_URL = 'http://localhost:3000/division';
@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Division[] | any> {
    return this.http.get(API_URL);
  }
}
