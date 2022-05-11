import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { BrandFormValues, IBrand } from './../models/IBrand';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl =  environment.apiUrl;

  constructor(private http:HttpClient) { }

  getBrands():Observable<IBrand[]>
  {
    return this.http.get<IBrand[]>(this.baseUrl + `products/brands`);
  }

  getBrand(id:string)
  {
    return this.http.get(this.baseUrl + `brands/${id}`,{headers:this.getHeaders()})
  }

  updateBrand(brand:BrandFormValues, id:number)
  {
    return this.http.put(this.baseUrl + 'brands/' + id, brand,{headers:this.getHeaders()});
  }

  createBrand(brand:BrandFormValues)
  {
    return this.http.post(this.baseUrl + 'brands', brand,{headers:this.getHeaders()});
  }

  deleteBrand(id: number) 
  {
    return this.http.delete(this.baseUrl + 'brands/' + id,{headers:this.getHeaders()});
  }

  private getHeaders():HttpHeaders
  {
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',`Bearer ${token}`);
    return headers;
  }

}
