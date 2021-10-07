import { Injectable } from '@angular/core';
import {Position} from '../../../modules/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  positions: Position[];
  constructor() {
    this.positions = [
      {id:1, name: 'Lễ Tân'},
      {id:2, name: 'Phục vụ'},
      {id:3, name: 'Chuyên viên'},
      {id:4, name: 'Giám sát'},
      {id:5, name: 'Quản lý'},
      {id:6, name: 'Giám đốc'}
    ];
  }

  getAll(){
    return this.positions;
  }
}
