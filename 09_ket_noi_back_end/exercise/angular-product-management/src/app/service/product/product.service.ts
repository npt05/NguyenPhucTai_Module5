import {Injectable} from '@angular/core';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/category';

const API_URL = 'http://localhost:3000/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(API_URL);
  }

  saveProduct(product) {
    return this.http.post<Product>(API_URL, product);
  }

  findById(id: number) {
    return this.http.get<Product>(`${API_URL}/${id}`);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${API_URL}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${API_URL}/${id}`);
  }

}
