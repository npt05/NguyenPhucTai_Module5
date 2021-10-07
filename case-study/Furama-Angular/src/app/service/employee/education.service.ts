import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../../../model/employee/Education';

const API_URL = 'http://localhost:3000/educationDegree';
@Injectable({
  providedIn: 'root'
})
export class EducationService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(API_URL);
  }
}
