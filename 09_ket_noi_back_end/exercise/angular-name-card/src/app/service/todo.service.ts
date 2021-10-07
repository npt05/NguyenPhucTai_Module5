import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

const API_URL = 'http://localhost:3000/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  saveTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/${id}`);
  }

  updateDodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/${id}`);
  }
}
