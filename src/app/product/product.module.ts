import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { EditProductPicComponent } from './edit-product-pic/edit-product-pic.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { PagerComponent } from './pager/pager.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    ProductsComponent,
    EditProductPicComponent,
    EditProductComponent,
    PagerComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    PaginationModule,
    FormsModule,
    CurrencyMaskModule
  ]
})
export class ProductModule { }
