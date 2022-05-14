import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/order';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:IOrder[];
  constructor(private orderService:OrderService) {
    this.orders =[];
   }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(data=>{
      this.orders = data;
      console.log(data[0].status.toString() == ' Accepted')
      console.log(data[5].status.toString())
    });
  }

}
