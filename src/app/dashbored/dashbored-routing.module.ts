import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboredComponent } from './dashbored/dashbored.component';


const routes: Routes =[
  {path:'' , component:DashboredComponent}
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
export class DashboredRoutingModule { }
