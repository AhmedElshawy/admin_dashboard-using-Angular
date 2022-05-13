import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderService } from './../order.service';
import { IAddress, IOrder, IOrderItems } from './../../models/order';
import { ActivatedRoute } from '@angular/router';
declare const html2pdf : any;

@Component({
  selector: 'app-order-invoice',
  templateUrl: './order-invoice.component.html',
  styleUrls: ['./order-invoice.component.scss']
})
export class OrderInvoiceComponent implements OnInit {
 
  @ViewChild('invoice') Invoice?:ElementRef;
  order?:IOrder;
  shippingAddress?:IAddress;
  orderItems?:IOrderItems[];
  dueOrderDate?: Date;
  constructor(private orderService:OrderService , private router:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder()
  {
    let id = parseInt( this.router.snapshot.paramMap.get('id')!);
    this.orderService.getOrderById(id).subscribe(data=>{
      this.order = data;
      this.shippingAddress = data.shipToAddress;
      this.orderItems = data.orderItems;
      this.dueOrderDate = this.addDays(data.orderDate,7);
    })
  }

  private addDays(originalDate:Date, days:number)
  {
    let cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
  }

  getInvoice()
  {
    let pdf_content = this.Invoice?.nativeElement;
    let options = {
      margin:       1,
      filename:     'Invoice.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf(pdf_content, options);
  }

}

