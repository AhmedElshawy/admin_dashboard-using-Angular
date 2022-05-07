import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ShopParams } from '../models/ShopParams';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];
  totalCount: number;
  shopParams: ShopParams;

  constructor(private productsService:ProductsService) { 
    this.products = [];
    this.totalCount = 0;
    this.shopParams = new ShopParams();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts(this.shopParams).subscribe(response => {
      this.products = response.body!.data;
      this.shopParams.pageNumber =response.body!.pageIndex;
      this.shopParams.pageSize =response.body!.pageSize;
      this.totalCount = response.body!.count;
    }, error => {
      console.log(error);
    });
  }

  onPageChanged(event:any)
  {
    this.shopParams.pageNumber = event.page;
    this.getProducts();
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe((response: any) => {
      this.products.splice(this.products.findIndex(p => p.id === id), 1);
      this.totalCount--;
    });
  }

}
