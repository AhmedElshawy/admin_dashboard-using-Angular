import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatigoriesComponent } from './catigories/catigories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditCategoryPicComponent } from './edit-category-pic/edit-category-pic.component';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatigoriesComponent,
    EditCategoryComponent,
    EditCategoryPicComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
