import { Component, OnInit } from '@angular/core';
import { DashboredService } from './../dashbored.service';
import { ICustomerStat, IOrderStat } from './../../models/stat';
import { OrderService } from './../../order/order.service';
import { IOrder } from 'src/app/models/order';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss']
})
export class DashboredComponent implements OnInit {
  // order stat data
  orderStat:IOrderStat[];
  numberOfOrdersArray:number[];
  datesArray:string[];
  pendingOrders:IOrder[];

  //customer stat data
  CustomerStat:ICustomerStat[];
  numberOfCustomersArray:number[];
  datesForCutomersArray:string[];

  public barChartOptions: any = {};
  public lineChartOptions: any = {};

  obj = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }

  constructor(private dashboaredService:DashboredService, private orderService:OrderService) {
    this.numberOfOrdersArray = [];
    this.datesArray = [];
    this.orderStat = [];
    this.pendingOrders = [];

    this.CustomerStat =[];
    this.numberOfCustomersArray=[];
    this.datesForCutomersArray = [];
   }


  ngOnInit(): void {
    this.getOrderStat();
    this.getCustomerStat();
    this.getPenddingOrders();
  }

  getPenddingOrders()
  {
    this.orderService.getOrders().subscribe(data=>{
      this.pendingOrders = data.filter(item=>{
        return item.status == "Pending"
      });
    })
  }

  getCustomerStat()
  {
    this.dashboaredService.getCustomersStatistics().subscribe(data=>{
      this.numberOfCustomersArray = data.map(item=>{
        return item.numberOfUsers
      });
      
      this.datesForCutomersArray = data.map(item=>{
        return item.registerDate
      });
      this.lineChartOptions = this.getLineChartOptions(this.obj);
    })
    
  }

  getOrderStat()
  {
    this.dashboaredService.getOrdersStatistics().subscribe(data=>{
      this.numberOfOrdersArray = data.map(item=>{
        return item.numberOfOrders
      });
      
      this.datesArray = data.map(item=>{
        return item.orderDate
      })
      this.barChartOptions = this.getBarChartOptions(this.obj);
    });
  }

  /**
 * Bar chart options
 */
getBarChartOptions(obj: any) {
  return {
    series: [{
      name: 'Orders',
      data: this.numberOfOrdersArray 
    }],
    chart: {
      type: 'bar',
      height: '450',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary],    
    grid: {
      padding: {
        bottom: -4
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: 'string',
      categories: this.datesArray,
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4
      }
    }
  }
};


/**
 * Line chart options
 */
 getLineChartOptions(obj: any) {
  return {
    series: [
      {
        name:
          "Cutomers",
        data: this.numberOfCustomersArray
      }
    ],
    chart: {
      type: "line",
      height: '390',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger, obj.warning],
    grid: {
      padding: {
        bottom: -4
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "string",
      categories: this.datesForCutomersArray,
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0
      }
    },
    markers: {
      size: 0,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round"
    },
  }
};

}
