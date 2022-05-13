import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getOrders()
  {
    return this.http.get<IOrder[]>(this.baseUrl + 'Order/all',{headers:this.getHeaders()});
  }

  getOrderById(id:number)
  {
    return this.http.get<IOrder>(this.baseUrl + `Order/${id}`,{headers:this.getHeaders()});
  }

  private getHeaders():HttpHeaders
  {
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',`Bearer ${token}`);
    return headers;
  }
}
