import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICustomerStat } from '../models/stat';
import { IOrderStat } from './../models/stat';

@Injectable({
  providedIn: 'root'
})
export class DashboredService {
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getOrdersStatistics()
  {
    return this.http.get<IOrderStat[]>(this.baseUrl + `Order/statustics`);
  }

  getCustomersStatistics()
  {
    return this.http.get<ICustomerStat[]>(this.baseUrl + `Account/CustomerStatistics`)
  }
}
