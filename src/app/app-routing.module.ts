import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './layout/base/base.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'products', component: ProductsComponent },
  // { path: 'products/create', component: EditProductComponent },
  // { path: 'products/edit/:id', component: EditProductComponent },
  // { path: 'products/photoUpload/:id', component: EditPhotoComponent },
  // { path: 'catigories/photoUpload/:id', component: EditTypePhotoComponent },
  // { path: 'catigories', component: CatigoriesComponent },
  // { path: 'catigories/create', component: EditTypeComponent },
  // { path: 'catigories/edit/:id', component: EditTypeComponent }

  { path: '', component:BaseComponent ,children:[
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'products' , loadChildren:()=> import('./product/product.module')
    .then(mod=>mod.ProductModule) },
    {path:'catigories' , loadChildren:()=> import('./category/category.module')
    .then(mod=>mod.CategoryModule) },
  ]
}
];


@NgModule({
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
