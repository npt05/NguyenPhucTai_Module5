import { Injectable } from '@angular/core';
import {Divition} from '../../../modules/Divition';

@Injectable({
  providedIn: 'root'
})
export class DivitionService {

  divitions: Divition[];

  constructor() {
    this.divitions = [
      {id:1, name: 'Sale-Marketing'},
      {id:2, name: 'Hành Chính'},
      {id:3, name: 'Phục vụ'},
      {id:4, name: 'Quản lý'}
    ];
  }

  getAll(){
    return this.divitions;
  }
}
