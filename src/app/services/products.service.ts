import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrand } from '../models/IBrand';
import { IPagnation } from '../models/IPagination';
import { IProductType, TypeFormValues } from '../models/IProductType';
import { IProduct, ProductFormValues } from '../models/product';
import { ShopParams } from '../models/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProduct(product: ProductFormValues) {
    return this.http.post(this.baseUrl + 'products', product,{headers:this.getHeaders()});
  }

  updateProduct(product: ProductFormValues, id: number) {
    return this.http.put(this.baseUrl + 'products/' + id, product,{headers:this.getHeaders()});
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + 'products/' + id,{headers:this.getHeaders()});
  }

  getProducts(shopParams:ShopParams)
  {
    let params = new HttpParams();
    if(shopParams.brandId !==0){
      params = params.append("brandId",shopParams.brandId.toString());
    }
    if(shopParams.typeId !==0){
      params = params.append("typeId" , shopParams.typeId.toString());
    }

    if(shopParams.search){
      params =params.append("search",shopParams.search)
    }
   
    params = params.append("sort" , shopParams.sort);
    params = params.append("pageIndex",shopParams.pageNumber.toString());
    params = params.append("pageSize",shopParams.pageSize.toString());

    return this.http.get<IPagnation>(this.baseUrl+ `products` , {observe:"response",params})
  }


  getBrands():Observable<IBrand[]>
  {
    return this.http.get<IBrand[]>(this.baseUrl + `products/brands`)
  }

  getTypes():Observable<IProductType[]>
  {
    return this.http.get<IProductType[]>(this.baseUrl + `products/types`);
  }

  getProduct(id:string)
  {
    return this.http.get<IProduct>(this.baseUrl + `products/${id}`,{headers:this.getHeaders()});
  }

  getType(id:string)
  {
    return this.http.get(this.baseUrl + `types/${id}`,{headers:this.getHeaders()});
  }

  updateType(category:TypeFormValues, id:number)
  {
    return this.http.put(this.baseUrl + 'types/' + id, category,{headers:this.getHeaders()});
  }

  createCategory(category:TypeFormValues)
  {
    return this.http.post(this.baseUrl + 'types', category ,{headers:this.getHeaders()});
  }

  deleteCategory(id: number) 
  {
    return this.http.delete(this.baseUrl + 'types/' + id,{headers:this.getHeaders()});
  }

  private getHeaders():HttpHeaders
  {
    const token=localStorage.getItem('token');
    let headers=new HttpHeaders();
    headers=headers.set('Authorization',`Bearer ${token}`);
    return headers;
  }
}
