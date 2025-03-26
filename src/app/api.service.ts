import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public apiService: HttpClient) {
    apiService;
  }

  getAllProducts() {
    return this.apiService.get('http://localhost:3000/products');
  }

  getProductById(id: string) {
    return this.apiService.get(`http://localhost:3000/products/${id}`);
  }
}
