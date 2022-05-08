import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductPicComponent } from './edit-product-pic/edit-product-pic.component';



const routes:Routes = [
  {path:'' , component:ProductsComponent},
  {path:'create' , component:EditProductComponent},
  {path:'edit/:id' , component:EditProductComponent},
  {path:'photoUpload/:id' , component:EditProductPicComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
