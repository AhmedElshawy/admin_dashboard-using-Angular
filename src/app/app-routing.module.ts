import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { EditTypePhotoComponent } from './edit-type-photo/edit-type-photo.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: EditProductComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'products/photoUpload/:id', component: EditPhotoComponent },
  { path: 'catigories/photoUpload/:id', component: EditTypePhotoComponent },
  { path: 'catigories', component: CatigoriesComponent },
  { path: 'catigories/create', component: EditTypeComponent },
  { path: 'catigories/edit/:id', component: EditTypeComponent }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
