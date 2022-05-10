import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatigoriesComponent } from './catigories/catigories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditCategoryPicComponent } from './edit-category-pic/edit-category-pic.component';

const routes:Routes =[
  {path:'', component:CatigoriesComponent},
  {path:'create', component:EditCategoryComponent},
  {path:'edit/:id', component:EditCategoryComponent},
  {path:'photoUpload/:id', component:EditCategoryPicComponent},
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
export class CategoryRoutingModule { }
