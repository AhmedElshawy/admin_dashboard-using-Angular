import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboredComponent } from './dashbored/dashbored.component';
import { DashboredRoutingModule } from './dashbored-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    DashboredComponent
  ],
  imports: [
    CommonModule,
    DashboredRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboredModule { }
