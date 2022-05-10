import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandFormValues } from 'src/app/models/IBrand';
import { BrandService } from './../brand.service';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.scss']
})
export class EditBrandsComponent implements OnInit {

  brand:BrandFormValues
  constructor(private brandService:BrandService,
     private route:ActivatedRoute,
     private router:Router) {
    this.brand = new BrandFormValues();
   }

  ngOnInit(): void {
    if (this.route.snapshot.url[0].path === 'edit') {
      this.loadBrand();
    }
  }

  loadBrand() 
  {
    this.brandService.getBrand(this.route.snapshot.paramMap.get('id')!.toString()).subscribe((response: any) => {
      this.brand = {...response};
    });
  }

  onSubmit(brand: BrandFormValues) {
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedBrand = {...this.brand, ...brand};
      this.brandService.updateBrand(updatedBrand, parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((response: any) => {
        this.router.navigate([`brands`]);
      });
    } else {
      const newBrand = {...brand};
      this.brandService.createBrand(newBrand).subscribe((response: any) => {
        this.router.navigate([`brands`]);
      });
    }
  }

}
