import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';

const routes: Routes =[
  {path:'' , component:OrdersComponent},
  {path:'invoice/:id' , component:OrderInvoiceComponent}
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
export class OrderRoutingModule { }
