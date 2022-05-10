import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './layout/base/base.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'account' , loadChildren:()=> import('./account/account.module')
    .then(mod=>mod.AccountModule) },

  { path: '',
    canActivate:[AuthGuard],
   component:BaseComponent ,
  children:[
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'products' , loadChildren:()=> import('./product/product.module')
    .then(mod=>mod.ProductModule) },
    {path:'catigories' , loadChildren:()=> import('./category/category.module')
    .then(mod=>mod.CategoryModule) },
    {path:'brands' , loadChildren:()=> import('./brand/brand.module')
    .then(mod=>mod.BrandModule) },
  ]
}
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
