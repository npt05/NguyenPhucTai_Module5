import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../../../model/employee/Education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private API_URL = 'http://localhost:3000/education';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Education[] | any> {
    return this.http.get(this.API_URL);
  }
}
