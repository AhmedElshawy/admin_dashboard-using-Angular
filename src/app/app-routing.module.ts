import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((mod) => mod.AccountModule),
  },
  {
    path: 'error',
    data: {
      type: 404,
      title: 'Page Not Found',
      desc: "Oopps!! The page you were looking for doesn't exist.",
    },
    component: ErrorPageComponent,
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent,
  },

  {
    path: '',
    canActivate: [AuthGuard],
    component: BaseComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
      },
      {
        path: 'catigories',
        loadChildren: () =>
          import('./category/category.module').then(
            (mod) => mod.CategoryModule
          ),
      },
      {
        path: 'brands',
        loadChildren: () =>
          import('./brand/brand.module').then((mod) => mod.BrandModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
