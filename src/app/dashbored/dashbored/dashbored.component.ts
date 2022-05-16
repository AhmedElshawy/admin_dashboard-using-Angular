import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboredService } from './../dashbored.service';
import { ICustomerStat, IOrderStat } from './../../models/stat';
import { OrderService } from './../../order/order.service';
import { IOrder } from 'src/app/models/order';
import { IBrandsStat } from './../../models/brandStat';
declare const Chart: any;
declare const html2pdf : any;

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss'],
})
export class DashboredComponent implements OnInit {
  @ViewChild('report') report?:ElementRef;
  
  // order stat data
  orderStat: IOrderStat[];
  numberOfOrdersArray: number[];
  datesArray: string[];
  pendingOrders: IOrder[];

  //customer stat data
  CustomerStat: ICustomerStat[];
  numberOfCustomersArray: number[];
  datesForCutomersArray: string[];

  //brands data
  brandStat: IBrandsStat[];
  brandsArray: string[];
  sales: number[];

  public barChartOptions: any = {};
  public lineChartOptions: any = {};

  obj = {
    primary: '#6571ff',
    secondary: '#7987a1',
    success: '#05a34a',
    info: '#66d1d1',
    warning: '#fbbc06',
    danger: '#ff3366',
    light: '#e9ecef',
    dark: '#060c17',
    muted: '#7987a1',
    gridBorder: 'rgba(77, 138, 240, .15)',
    bodyColor: '#000',
    cardBg: '#fff',
    fontFamily: "'Roboto', Helvetica, sans-serif",
  };

  constructor(
    private dashboaredService: DashboredService,
    private orderService: OrderService
  ) {
    this.numberOfOrdersArray = [];
    this.datesArray = [];
    this.orderStat = [];
    this.pendingOrders = [];

    this.CustomerStat = [];
    this.numberOfCustomersArray = [];
    this.datesForCutomersArray = [];

    this.brandStat = [];
    this.sales = [];
    this.brandsArray = [];
  }

  ngOnInit(): void {
    this.getOrderStat();
    this.getCustomerStat();
    this.getPenddingOrders();
    this.getBrandsStat();
  }

  getBrandsStat() {
    this.dashboaredService.getBrandsStatistics().subscribe((data) => {
      this.sales = data.map((item) => {
        return item.numberOfSales;
      });

      this.brandsArray = data.map((item) => {
        return item.brandName;
      });
      this.getPieChartOptions();
    });
  }

  getPenddingOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.pendingOrders = data.filter((item) => {
        return item.status == 'Pending';
      });
    });
  }

  getCustomerStat() {
    this.dashboaredService.getCustomersStatistics().subscribe((data) => {
      this.numberOfCustomersArray = data.map((item) => {
        return item.numberOfUsers;
      });

      this.datesForCutomersArray = data.map((item) => {
        return item.registerDate;
      });
      this.lineChartOptions = this.getLineChartOptions(this.obj);
    });
  }

  getOrderStat() {
    this.dashboaredService.getOrdersStatistics().subscribe((data) => {
      this.numberOfOrdersArray = data.map((item) => {
        return item.numberOfOrders;
      });

      this.datesArray = data.map((item) => {
        return item.orderDate;
      });
      this.barChartOptions = this.getBarChartOptions(this.obj);
    });
  }

  generateReport()
  {
    let pdf_content = this.report?.nativeElement;
    let options = {
      margin:       1,
      filename:     'Report.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf(pdf_content, options);
  }

  /**
   * Pie chart options
   */
  getPieChartOptions() {
    let xValues = this.brandsArray;
    let yValues = this.sales;
    let barColors = [
      '#7987a1',
      '#05a34a',
      '#b91d47',
      '#00aba9',
      '#2b5797',
      '#e8c3b9',
      '#1e7145',
      '#6571ff',
    ];

    new Chart('myChart', {
      type: 'pie',
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Brands number of sales',
        },
      },
    });
  }

  /**
   * Bar chart options
   */
  getBarChartOptions(obj: any) {
    return {
      series: [
        {
          name: 'Orders',
          data: this.numberOfOrdersArray,
        },
      ],
      chart: {
        type: 'bar',
        height: '450',
        parentHeightOffset: 0,
        foreColor: obj.bodyColor,
        background: obj.cardBg,
        toolbar: {
          show: false,
        },
      },
      colors: [obj.primary],
      grid: {
        padding: {
          bottom: -4,
        },
        borderColor: obj.gridBorder,
        xaxis: {
          lines: {
            show: true,
          },
        },
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
          offsetX: 0,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
    };
  }

  /**
   * Line chart options
   */
  getLineChartOptions(obj: any) {
    return {
      series: [
        {
          name: 'Cutomers',
          data: this.numberOfCustomersArray,
        },
      ],
      chart: {
        type: 'line',
        height: '390',
        parentHeightOffset: 0,
        foreColor: obj.bodyColor,
        background: obj.cardBg,
        toolbar: {
          show: false,
        },
      },
      colors: [obj.primary, obj.danger, obj.warning],
      grid: {
        padding: {
          bottom: -4,
        },
        borderColor: obj.gridBorder,
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'string',
        categories: this.datesForCutomersArray,
        lines: {
          show: true,
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
          offsetX: 0,
        },
      },
      markers: {
        size: 0,
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        fontFamily: obj.fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
      },
      stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'round',
      },
    };
  }
}
