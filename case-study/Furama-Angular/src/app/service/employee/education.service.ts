import { Injectable } from '@angular/core';
import {Education} from '../../../modules/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educations: Education[];
  constructor() {
    this.educations = [
      {id:1, name: 'Trung cấp'},
      {id:2, name: 'Cao đẳng'},
      {id:3, name: 'Đại học'},
      {id:4, name: 'Sau đại học'}
    ];
  }

  getAll(){
    return this.educations;
  }
}
