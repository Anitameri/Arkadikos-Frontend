import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/products";
  
  products:Product[]=[];


  constructor(private httpClient: HttpClient) { }
  
  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
