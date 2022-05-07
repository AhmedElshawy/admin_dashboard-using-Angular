import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IBrand } from '../models/IBrand';
import { IProductType } from '../models/IProductType';
import { ProductFormValues } from '../models/product';
import { ProductsService } from './../services/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: ProductFormValues;
  brands: IBrand[];
  types: IProductType[];

  constructor(private productsService: ProductsService,           
              private route: ActivatedRoute,
              private router: Router) 
  {
    this.product = new ProductFormValues();
    this.brands =[];
    this.types =[];
  }

  ngOnInit(): void {
    const brands = this.getBrands();
    const types = this.getTypes();

    forkJoin([types, brands]).subscribe(results => {
      this.types = results[0];
      this.brands = results[1];
    }, error => {
      console.log(error);
    }, () => {
      if (this.route.snapshot.url[1].path === 'edit') {
        this.loadProduct();
      }
    });
  }

  updatePrice(event: any) {
    this.product.price = event;
  }

  loadProduct() 
  {
    this.productsService.getProduct(this.route.snapshot.paramMap.get('id')!.toString()).subscribe((response: any) => {
      const productBrandId = this.brands && this.brands.find(x => x.name === response.productBrand)!.id;
      const productTypeId = this.types && this.types.find(x => x.name === response.productType)!.id;
      this.product = {...response, productBrandId, productTypeId};
    });
  }

  getBrands() 
  {
    return this.productsService.getBrands();
  }

  getTypes() 
  {
    return this.productsService.getTypes();
  }

  onSubmit(product: ProductFormValues) {
    if (this.route.snapshot.url[1].path === 'edit') {
      const updatedProduct = {...this.product, ...product, price: +product.price};
      this.productsService.updateProduct(updatedProduct, parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((response: any) => {
        this.router.navigate(['products']);
      });
    } else {
      const newProduct = {...product, price: product.price};
      this.productsService.createProduct(newProduct).subscribe((response: any) => {
        this.router.navigate(['products']);
      });
    }
  }

}
