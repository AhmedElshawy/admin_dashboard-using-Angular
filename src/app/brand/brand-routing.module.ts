import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { EditBrandsComponent } from './edit-brands/edit-brands.component';


const routes:Routes =[
  {path:'', component:BrandsComponent},
  {path:'create', component:EditBrandsComponent},
  {path:'edit/:id', component:EditBrandsComponent},
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
export class BrandRoutingModule { }
