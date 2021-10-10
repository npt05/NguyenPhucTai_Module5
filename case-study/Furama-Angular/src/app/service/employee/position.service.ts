import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../../../model/employee/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private API_URL = 'http://localhost:3000/position';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Position[] | any> {
    return this.http.get(this.API_URL);
  }
}
