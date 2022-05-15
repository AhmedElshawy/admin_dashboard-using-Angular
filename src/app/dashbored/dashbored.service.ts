import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICustomerStat } from '../models/stat';
import { IOrderStat } from './../models/stat';
import { IBrandsStat } from './../models/brandStat';

@Injectable({
  providedIn: 'root'
})
export class DashboredService {
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getOrdersStatistics()
  {
    return this.http.get<IOrderStat[]>(this.baseUrl + `Order/statistics`,{headers:this.getHeaders()});
  }

  getCustomersStatistics()
  {
    return this.http.get<ICustomerStat[]>(this.baseUrl + `Account/CustomerStatistics`,{headers:this.getHeaders()})
  }

  getBrandsStatistics()
  {
    return this.http.get<IBrandsStat[]>(this.baseUrl + `Order/Brand/statistics`,{headers:this.getHeaders()})
  }

  private getHeaders():HttpHeaders
  {
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',`Bearer ${token}`);
    return headers;
  }
}
