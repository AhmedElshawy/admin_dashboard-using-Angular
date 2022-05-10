import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/models/IBrand';
import { BrandService } from './../brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands:IBrand[];
  constructor(private brandsService:BrandService) {
    this.brands = [];
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandsService.getBrands().subscribe(data=>{
      this.brands = data;
    });
  }

  onDelete(id:number)
  {
    this.brandsService.deleteBrand(id).subscribe(data=>{
      this.brands.splice(this.brands.findIndex(p => p.id === id), 1);    
    });
  }

}
