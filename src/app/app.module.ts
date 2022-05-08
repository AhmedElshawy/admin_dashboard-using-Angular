import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Shared/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { PagerComponent } from './Shared/pager/pager.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { EditTypePhotoComponent } from './edit-type-photo/edit-type-photo.component';
import { EditTypeComponent } from './edit-type/edit-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ProductsComponent,
    EditProductComponent,
    PagerComponent,
    EditPhotoComponent,
    CatigoriesComponent,
    EditTypePhotoComponent,
    EditTypeComponent
  ]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CurrencyMaskModule,
    FormsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
