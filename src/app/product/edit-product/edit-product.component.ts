import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IBrand } from 'src/app/models/IBrand';
import { IProductType } from 'src/app/models/IProductType';
import { ProductFormValues } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

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
      if (this.route.snapshot.url[0].path === 'edit') {
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
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedProduct = {...this.product, ...product, price: +product.price};
      this.productsService.updateProduct(updatedProduct, parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((response: any) => {
        this.router.navigate([`products/photoUpload/${product.id}`]);
      });
    } else {
      const newProduct = {...product, price: product.price};
      this.productsService.createProduct(newProduct).subscribe((response: any) => {
        this.router.navigate([`products/photoUpload/${product.id}`]);
      });
    }
  }

}
