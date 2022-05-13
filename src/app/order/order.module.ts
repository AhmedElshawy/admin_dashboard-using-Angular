import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderInvoiceComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ]
})
export class OrderModule { }
