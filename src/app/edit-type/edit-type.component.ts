import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { TypeFormValues } from './../models/IProductType';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss']
})
export class EditTypeComponent implements OnInit {

  category:TypeFormValues
  constructor(private productsService:ProductsService,
     private route:ActivatedRoute,
     private router:Router) {
    this.category = new TypeFormValues();
   }

  ngOnInit(): void {
    if (this.route.snapshot.url[1].path === 'edit') {
      this.loadType();
    }
  }

  loadType() 
  {
    this.productsService.getType(this.route.snapshot.paramMap.get('id')!.toString()).subscribe((response: any) => {
      this.category = {...response};
    });
  }

  onSubmit(category: TypeFormValues) {
    if (this.route.snapshot.url[1].path === 'edit') {
      const updatedType = {...this.category, ...category};
      this.productsService.updateType(updatedType, parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((response: any) => {
        this.router.navigate([`catigories/photoUpload/${category.id}`]);
      });
    } else {
      const newType = {...category};
      this.productsService.createCategory(newType).subscribe((response: any) => {
        this.router.navigate([`catigories/photoUpload/${category.id}`]);
      });
    }
  }
}