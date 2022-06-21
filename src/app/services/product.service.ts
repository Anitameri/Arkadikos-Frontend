import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { order } from 'app/interface/order';
import { order_dto } from 'app/interface/order_dto';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8080/api/products";
  private ORDER_API = 'http://127.0.0.1:8080/api/order/';
  
  orders:order[]=[];

  constructor(private httpClient: HttpClient, private service:AuthorizationService) { }

  payOrder(): Observable<Object>
  {
    let order_dtos:order_dto[]=[];
    for(let o of this.orders)
      if(this.service.user_info.id && o.id && o.totalPrice && o.units)
        order_dtos.push(new order_dto(this.service.user_info.id, o.id, o.totalPrice, o.units));
    return this.httpClient.post(`${this.ORDER_API}payment`, order_dtos, {headers: this.service.setToken()});
  }
  
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
