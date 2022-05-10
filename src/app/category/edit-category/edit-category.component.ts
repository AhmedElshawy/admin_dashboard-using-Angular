import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeFormValues } from 'src/app/models/IProductType';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category:TypeFormValues
  constructor(private productsService:ProductsService,
     private route:ActivatedRoute,
     private router:Router) {
    this.category = new TypeFormValues();
   }

  ngOnInit(): void {
    if (this.route.snapshot.url[0].path === 'edit') {
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
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedType = {...this.category, ...category};
      this.productsService.updateType(updatedType, parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((response: any) => {
        this.router.navigate([`catigories/photoUpload/${response.id}`]);
      });
    } else {
      const newType = {...category};
      this.productsService.createCategory(newType).subscribe((response: any) => {
        this.router.navigate([`catigories/photoUpload/${response.id}`]);
      });
    }
  }

}
