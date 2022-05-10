import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { EditBrandsComponent } from './edit-brands/edit-brands.component';
import { BrandRoutingModule } from './brand-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BrandsComponent,
    EditBrandsComponent
  ],
  imports: [
  CommonModule,
  BrandRoutingModule,
  FormsModule
  ]
})
export class BrandModule { }
